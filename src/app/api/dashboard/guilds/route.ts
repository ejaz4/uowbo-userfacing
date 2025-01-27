import { db } from "@/libs/db";
import { getDiscordIdFromToken, verifyToken } from "@/libs/token";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const token = req.headers.get("authorization") as string;

  if (!token) {
    return new NextResponse(
      JSON.stringify({
        message: "No token",
      }),
      {
        status: 400,
      }
    );
  }

  if (!(await verifyToken(token))) {
    return new NextResponse(
      JSON.stringify({
        message: "You aren't authorised to use this service.",
      }),
      {
        status: 403,
      }
    );
  }

  const userId = await getDiscordIdFromToken(token);

  if (!userId) {
    return new NextResponse(
      JSON.stringify({
        message: "You aren't authorised to use this service.",
      }),
      {
        status: 403,
      }
    );
  }

  const usableGuilds = await db.guildUser.findMany({
    where: {
      DiscordUser: {
        discordId: userId,
      },
      OR: [
        {
          isMod: true,
        },
        {
          isOwner: true,
        },
      ],
    },
    select: {
      Guilds: {
        select: {
          guildId: true,
          guildName: true,
          guildIcon: true,
          settings: true,
        },
      },
      isMod: true,
      isOwner: true,
    },
  });

  return new NextResponse(JSON.stringify(usableGuilds));
};
