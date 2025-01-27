import { db } from "./db";

export const verifyToken = async (token: string) => {
  try {
    const tokenEntry = await db.token.findUnique({
      where: {
        token: token,
      },
    });

    if (!tokenEntry) {
      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
};

export const getDiscordIdFromToken = async (token: string) => {
  const tokenEntry = await db.token.findUnique({
    where: {
      token: token,
    },
    select: {
      DiscordUser: {
        select: {
          discordId: true,
        },
      },
    },
  });

  if (!tokenEntry) {
    return false;
  }

  if (!tokenEntry.DiscordUser) {
    return false;
  }

  return tokenEntry.DiscordUser.discordId;
};

export const isAllowedOnGuild = async (token: string, guildId: string) => {
  const userId = await getDiscordIdFromToken(token);

  if (!userId) {
    return false;
  }

  const guildUser = await db.guildUser.findFirst({
    where: {
      Guilds: {
        guildId: guildId,
      },
      DiscordUser: {
        discordId: userId,
      },
    },
  });

  if (!guildUser) {
    return false;
  }

  if (guildUser.isMod || guildUser.isOwner) {
    return true;
  }

  return false;
};
