import { createZodRoute } from "next-zod-route";
import z from "zod";
import { db } from "~/server/db";

export const POST = createZodRoute()
  .body(
    z.object({
      users: z.array(
        z.object({
          id: z.string(),
          username: z.string(),
          avatar: z.string().nullable(),
          isOwner: z.boolean(),
        }),
      ),
      id: z.string(),
      name: z.string(),
      icon: z.string().nullable(),
    }),
  )
  .handler(async (request, context) => {
    // Check if guild is created
    const body = context.body;

    await db.discordGuild.upsert({
      where: {
        id: body.id,
      },
      // 1. Logic if the Guild does NOT exist
      create: {
        id: body.id,
        name: body.name,
        icon: body.icon,
        guildMembers: {
          create: body.users.map((user) => ({
            isOwner: user.isOwner,
            // Link to the Account (and create the Account if it's new)
            discord: {
              connectOrCreate: {
                where: { id: user.id },
                create: {
                  id: user.id,
                  username: user.username,
                  avatarUrl: user.avatar,
                },
              },
            },
          })),
        },
      },
      // 2. Logic if the Guild DOES exist
      update: {
        name: body.name,
        icon: body.icon,
        guildMembers: {
          upsert: body.users.map((user) => ({
            // IDENTIFIER: Find the specific member record by composite ID
            where: {
              discordGuildId_discordAccountLinkId: {
                discordGuildId: body.id,
                discordAccountLinkId: user.id,
              },
            },
            // UPDATE: If member exists, update these fields
            update: {
              isOwner: user.isOwner,
              // Update the related Account data (sync username/avatar)
              discord: {
                update: {
                  username: user.username,
                  avatarUrl: user.avatar,
                },
              },
            },
            // CREATE: If member doesn't exist, create it
            create: {
              isOwner: user.isOwner,
              // Link to the Account (and create the Account if it's new)
              discord: {
                connectOrCreate: {
                  where: { id: user.id },
                  create: {
                    id: user.id,
                    username: user.username,
                    avatarUrl: user.avatar,
                  },
                },
              },
            },
          })),
        },
      },
    });
  });
