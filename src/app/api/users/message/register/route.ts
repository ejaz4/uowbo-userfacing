import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const secret = req.headers.get("x-secret");
  const body = (await req.json()) as {
    guildId: string;
    messageId: string;
    authorId: string;
    message: string;
    attachmentUrl?: string;
    timestamp: number;
    mentionedMessage?: string;
  };

  if (secret !== process.env.SECRET) {
    return new NextResponse(JSON.stringify({ message: "Unauthorised" }), {
      status: 401,
    });
  }

  let connection = await db.guildUser.findFirst({
    where: {
      Guilds: {
        guildId: body.guildId,
      },
      DiscordUser: {
        discordId: body.authorId,
      },
    },
  });

  if (!connection) {
    return new NextResponse(
      JSON.stringify({ message: "Connection not found" }),
      {
        status: 404,
      }
    );
  }

  const message = await db.guildMessage.create({
    data: {
      id: body.messageId,
      message: body.message,
      attachmentUrl: body.attachmentUrl,
      GuildUser: {
        connect: {
          id: connection.id,
        },
      },
      createdAt: new Date(body.timestamp),
    },
  });

  if (body.mentionedMessage) {
    await db.guildMessage.update({
      where: {
        id: body.messageId,
      },
      data: {
        parentMessage: {
          connect: {
            id: body.mentionedMessage,
          },
        },
      },
    });
  }

  return new NextResponse(JSON.stringify(message), {
    status: 201,
  });
};
