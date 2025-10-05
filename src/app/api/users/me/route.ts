import { db } from "@/libs/db";
import { verifyToken } from "@/libs/token";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const token = req.headers.get("Authorization");

  if (!token) {
    return new NextResponse(
      JSON.stringify({
        error: "Unauthorized",
      }),
      { status: 401 }
    );
  }

  const me = await db.token.findUnique({
    where: {
      token,
    },
    include: {
      DiscordUser: {
        select: {
          avatar: true,
          username: true,
          guilds: {
            include: {
              Guilds: true,
            },
          },
        },
      },
    },
  });

  if (!me || !me.DiscordUser) {
    return new NextResponse(
      JSON.stringify({
        error: "Not found",
      }),
      { status: 404 }
    );
  }

  return new NextResponse(JSON.stringify(me.DiscordUser));
};
