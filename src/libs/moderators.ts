import { db } from "./db";
import { customLog } from "./logging";

export const updateModerators = (guild: string, moderatorRoleId: string) => {
  fetch(
    `${process.env.BOT_HOST}/guild/${guild}/roles/${moderatorRoleId}/members`,
    {
      headers: {
        "x-secret": process.env.SECRET as string,
      },
    }
  ).then(async (res) => {
    if (res.ok) {
      res.json().then(
        async (
          data: {
            id: string;
            username: string;
            displayAvatarURL: string;
          }[]
        ) => {
          const existingMods = await db.guildUser.findMany({
            where: {
              Guilds: {
                guildId: guild,
              },
              isMod: true,
            },
            select: {
              DiscordUser: {
                select: {
                  discordId: true,
                  username: true,
                  avatar: true,
                },
              },
            },
          });

          const members = data.map((m) => {
            return {
              discordId: m.id,
              username: m.username,
              avatar: m.displayAvatarURL,
            };
          });

          const removedMods = existingMods
            .filter(
              (m) =>
                members.find((n) => n.discordId == m.DiscordUser?.discordId) ==
                null
            )
            .map((m) => {
              return {
                discordId: m.DiscordUser?.discordId,
                username: m.DiscordUser?.username,
                avatar: m.DiscordUser?.avatar,
              };
            });

          await db.guildUser.updateMany({
            where: {
              Guilds: {
                guildId: guild,
              },
              DiscordUser: {
                discordId: {
                  in: removedMods.map((m) => m.discordId as string),
                },
              },
            },
            data: {
              isMod: false,
            },
          });

          await db.guildUser.updateMany({
            where: {
              Guilds: {
                guildId: guild,
              },
              DiscordUser: {
                discordId: {
                  in: members.map((m) => m.discordId as string),
                },
              },
            },
            data: {
              isMod: true,
            },
          });

          for (const mod of removedMods) {
            customLog(
              `@${mod.username} (${mod.discordId}) was removed as a moderator.`,
              guild
            );
          }

          const newMods = members.filter(
            (m) =>
              existingMods.find(
                (n) => n.DiscordUser?.discordId == m.discordId
              ) == null
          );

          for (const mod of newMods) {
            customLog(
              `@${mod.username} (${mod.discordId}) was added as a moderator.`,
              guild
            );
          }
        }
      );
    }
  });
};
