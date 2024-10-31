import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

type Body = {
  id: string;
  name: string;
  avatar: string;
};

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as Body;

  // Check if the user has an account
  let discordUser = await db.discordUser.findUnique({
    where: {
      discordId: body.id,
    },
  });

  if (!discordUser) {
    discordUser = await db.discordUser.create({
      data: {
        discordId: body.id,
        username: body.name,
        avatar: body.avatar,
      },
    });
  }

  const handover = await db.handover.create({
    data: {
      DiscordUser: {
        connect: {
          discordId: discordUser.discordId,
        },
      },
    },
  });

  return new NextResponse(
    JSON.stringify({
      handover: handover.id,
    }),
    { status: 200 }
  );
};
