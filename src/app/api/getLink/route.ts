import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as { handover: string };

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
          link: {
            select: {
              isVerified: true,
              isExternal: true,
              fullName: true,
              helperCode: true,
            },
          },
        },
      },

      isVerified: true,
    },
  });

  if (!handover) {
    return new NextResponse(JSON.stringify({ status: "No handover found" }), {
      status: 404,
    });
  }

  if (!handover.DiscordUser) {
    return new NextResponse(
      JSON.stringify({ status: "No Discord user found" }),
      {
        status: 404,
      }
    );
  }

  if (handover.DiscordUser.link.length == 0) {
    return new NextResponse(JSON.stringify({ status: "No link found" }), {
      status: 404,
    });
  }

  return new NextResponse(JSON.stringify(handover.DiscordUser.link[0]), {
    status: 200,
  });
};
