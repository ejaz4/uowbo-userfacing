import { db } from "@/libs/db";
import { logWithModerator } from "@/libs/logging";
import {
  getDiscordIdFromToken,
  isAllowedOnGuild,
  verifyToken,
} from "@/libs/token";
import { EventRole, Federated, HitType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
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

  const body = (await req.json()) as {
    name: string;
    description?: string;
    start: number;
    end: number;
  };

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

  const myDiscordId = await getDiscordIdFromToken(token);

  if (!myDiscordId) {
    return new NextResponse(
      JSON.stringify({
        message: "You aren't authorised to use this service.",
      }),
      {
        status: 403,
      }
    );
  }

  const event = await db.event.create({
    data: {
      name: body.name,
      description: body.description,
      startTime: new Date(body.start),
      endTime: new Date(body.end),
      guilds: {
        connect: {
          guildId: p.guild,
        },
      },

      members: {
        create: {
          DiscordUser: {
            connect: {
              discordId: myDiscordId,
            },
          },
          role: EventRole.ORGANISER,
        },
      },
    },
  });

  logWithModerator(
    `created an event ${event.name} (${event.id})`,
    p.guild,
    myDiscordId
  );

  return new NextResponse(JSON.stringify(event), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
