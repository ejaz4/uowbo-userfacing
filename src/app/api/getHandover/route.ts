import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

type HandoverBody = {
  handover: string;
};

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as HandoverBody;

  if (!body.handover) {
    return new NextResponse(
      JSON.stringify({ status: "No handover provided" }),
      {
        status: 400,
      }
    );
  }

  const handover = await db.handover.findFirst({
    where: {
      id: body.handover,
    },
    select: {
      DiscordUser: {
        select: {
          discordId: true,
          username: true,
          avatar: true,
          guilds: {
            select: {
              Guilds: {
                select: {
                  guildId: true,
                  guildName: true,
                  guildIcon: true,
                },
              },
              isOwner: true,
              isMod: true,
            },
          },
        },
      },

      isVerified: true,
    },
  });

  return new NextResponse(JSON.stringify(handover), { status: 200 });
};
