import { db } from "@/libs/db";
import { verifyToken, isAllowedOnGuild } from "@/libs/token";
import { HitType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      guild: string;
      member: string;
    }>;
  }
) => {
  const token = req.headers.get("authorization") as string;
  const p = await params;

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

  const guild = p.guild;
  const isUserAllowed = await isAllowedOnGuild(token, guild);

  if (!isUserAllowed) {
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

  const member = await db.discordUser.findUnique({
    where: {
      discordId: p.member,
      guilds: {
        some: {
          Guilds: {
            guildId: guild,
          },
        },
      },
    },
    select: {
      discordId: true,
      username: true,
      avatar: true,
      link: {
        select: {
          isVerified: true,
          emailVerification: true,
          studentId: true,
          fullName: true,
          isExternal: true,
          BiometricEntry: true,
          authorityHits: {
            orderBy: {
              createdAt: "desc",
            },
            select: {
              id: true,
              createdAt: true,
              type: true,
              federated: true,
              reason: true,
              Guilds: {
                select: {
                  guildId: true,
                },
              },
            },
          },
        },
      },
      guilds: {
        where: {
          Guilds: {
            guildId: guild,
          },
        },
        select: {
          messages: {
            take: 10,
            orderBy: {
              createdAt: "desc",
            },
          },
          isMod: true,
          isOwner: true,
        },
      },
    },
  });

  if (!member) {
    return new NextResponse(
      JSON.stringify({
        message: "Member not found",
      }),
      {
        status: 404,
      }
    );
  }

  return new NextResponse(JSON.stringify(member));
};
