import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const secret = req.headers.get("x-secret");

  if (secret !== process.env.SECRET) {
    return new NextResponse(JSON.stringify({ message: "Unauthorised" }), {
      status: 401,
    });
  }

  const body = (await req.json()) as {
    id: string;
    name: string;
    icon?: string;

    users: {
      username: string;
      id: string;
      avatar: string;
      isOwner: boolean;
    }[];
  };

  if (!body) {
    return new NextResponse(JSON.stringify({ message: "No body provided" }), {
      status: 400,
    });
  }

  const guild = await db.guilds.findUnique({
    where: {
      guildId: body.id,
    },
  });

  if (!guild) {
    await db.guilds.create({
      data: {
        guildId: body.id,
        guildName: body.name,
        guildIcon: body.icon,
      },
    });
  }

  const updateGuild = await db.guilds.update({
    where: {
      guildId: body.id,
    },
    data: {
      guildName: body.name,
      guildIcon: body.icon,
    },
  });

  for (const user of body.users) {
    await db.discordUser.upsert({
      where: {
        discordId: user.id,
      },
      update: {
        username: user.username,
        avatar: user.avatar ? user.avatar : undefined,
      },
      create: {
        discordId: user.id,
        username: user.username,
        avatar: user.avatar,
      },
    });
  }

  for (const user of body.users) {
    const guildEntry = await db.guildUser.findMany({
      where: {
        DiscordUser: {
          discordId: user.id,
        },
        Guilds: {
          guildId: body.id,
        },
      },
    });

    if (guildEntry.length === 0) {
      await db.guildUser.create({
        data: {
          isOwner: user.isOwner,
          Guilds: {
            connect: {
              guildId: body.id,
            },
          },
          DiscordUser: {
            connect: {
              discordId: user.id,
            },
          },
        },
      });
    } else {
      await db.guildUser.update({
        where: {
          id: guildEntry[0].id,
        },
        data: {
          isOwner: user.isOwner,
        },
      });
    }
  }
  return new NextResponse(JSON.stringify({ message: "Success" }));
};
