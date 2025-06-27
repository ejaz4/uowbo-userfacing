import { db } from "@/libs/db";
import {
  getDiscordIdFromToken,
  isAllowedOnGuild,
  verifyToken,
} from "@/libs/token";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      guild: string;
    }>;
  }
) => {
  const token = req.headers.get("Authorization");
  const p = await params;

  if (!token) {
    return new NextResponse(
      JSON.stringify({
        error: "Unauthorized",
      }),
      { status: 401 }
    );
  }

  if (!verifyToken(token)) {
    return new NextResponse(
      JSON.stringify({
        error: "Unauthorized",
      }),
      { status: 401 }
    );
  }

  const guild = p.guild;
  const user = await getDiscordIdFromToken(token);

  if (!user) {
    return new NextResponse(
      JSON.stringify({
        error: "Unauthorized",
      }),
      { status: 401 }
    );
  }

  const guildAllowance = await isAllowedOnGuild(token, guild);

  if (!guildAllowance) {
    return new NextResponse(
      JSON.stringify({
        error: "Unauthorized",
      }),
      { status: 401 }
    );
  }

  const guildUser = await db.guildUser.findFirst({
    where: {
      Guilds: {
        guildId: guild,
      },
      DiscordUser: {
        discordId: user,
      },
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

  if (!guildUser) {
    return new NextResponse(
      JSON.stringify({
        error: "Not found",
      }),
      { status: 404 }
    );
  }

  return new NextResponse(JSON.stringify(guildUser), { status: 200 });
};
