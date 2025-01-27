import { db } from "@/libs/db";
import { isAllowedOnGuild, verifyToken } from "@/libs/token";
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

  const members = await db.guildUser.findMany({
    where: {
      Guilds: {
        guildId: guild,
      },
    },
    select: {
      DiscordUser: {
        select: {
          discordId: true,
          username: true,
          avatar: true,
          link: {
            select: {
              emailVerificationId: true,
              biometricEntryId: true,
              studentId: true,
              isVerified: true,
            },
          },
        },
      },
      isMod: true,
      isOwner: true,
    },
  });

  return new NextResponse(JSON.stringify(members));
};
