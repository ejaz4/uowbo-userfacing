import { db } from "@/libs/db";
import { logWithModerator } from "@/libs/logging";
import {
  getDiscordIdFromToken,
  isAllowedOnGuild,
  verifyToken,
} from "@/libs/token";
import { EventRole, Federated, HitType } from "@prisma/client";
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
  const p = await params;
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

  if (!(await isAllowedOnGuild(token, p.guild))) {
    return new NextResponse(
      JSON.stringify({
        message:
          "You aren't authorised to make changes to this guild, you must be a moderator or owner.",
      }),
      {
        status: 403,
      }
    );
  }

  const events = await db.event.findMany({
    where: {
      guilds: {
        guildId: p.guild,
      },
    },
    orderBy: {
      startTime: "asc",
    },
  });

  return new NextResponse(JSON.stringify(events), {
    status: 201,
  });
};
