import { db } from "./db";

export const logWithModerator = async (
  message: string,
  guildId: string,
  token: string
) => {
  const userId = await db.token.findUnique({
    where: {
      token: token,
    },
    select: {
      DiscordUser: {
        select: {
          username: true,
          discordId: true,
        },
      },
    },
  });

  if (!userId) {
    return;
  }

  await db.guildLog.create({
    data: {
      message: `@${userId.DiscordUser?.username} (${userId.DiscordUser?.discordId}) ${message}`,
      Guilds: {
        connect: {
          guildId: guildId,
        },
      },
    },
  });
};
