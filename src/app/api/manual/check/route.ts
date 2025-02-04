import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

type Body = {
  username: string;
};

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as Body;
  // Generate a 6 digit code and send it to the user
  const code = Math.floor(100000 + Math.random() * 900000);

  if (!body.username) {
    return new NextResponse(JSON.stringify({ error: "Username is required" }), {
      status: 400,
    });
  }

  const botRequest = await fetch(`${process.env.BOT_HOST}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (botRequest.status == 404) {
    return new NextResponse(
      JSON.stringify({
        error: "Bot request failed",
        moveTo: "/verify/not-found",
      }),
      { status: 500 }
    );
  }

  if (!botRequest.ok) {
    return new NextResponse(JSON.stringify({ error: "Bot request failed" }), {
      status: 500,
    });
  }

  const botResponse = (await botRequest.json()) as {
    userId: string;
    displayAvatarURL: string;
  };

  const userId = botResponse.userId;
  const avatar = botResponse.displayAvatarURL;

  // Save the code to the database
  const userHandover = await db.handover.create({
    data: {
      DiscordUser: {
        connectOrCreate: {
          where: {
            discordId: userId,
          },
          create: {
            discordId: userId,
            avatar,
            username: body.username,
          },
        },
      },
      isVerified: false,
      code: code.toString(),
    },
  });

  if (!userHandover) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to create handover" }),
      { status: 500 }
    );
  }

  const messageRequest = await fetch(`${process.env.BOT_HOST}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      code,
    }),
  });

  if (messageRequest.status == 403) {
    return new NextResponse(
      JSON.stringify({
        error: "Bot request failed",
        moveTo: "/verify/insecure",
      }),
      { status: 500 }
    );
  }

  return new NextResponse(
    JSON.stringify({
      moveTo: `/verify/${userHandover.id}`,
    }),
    { status: 200 }
  );
};
