import { db } from "@/libs/db";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const POST = async (req: NextRequest) => {
  const secret = req.headers.get("x-secret");

  if (secret !== process.env.SECRET) {
    return new NextResponse(
      JSON.stringify({
        message: "You aren't allowed to access this endpoint in this way.",
      }),
      {
        status: 401,
      }
    );
  }

  const { id } = (await req.json()) as { id: string };

  const token = crypto.randomBytes(32).toString("hex");

  try {
    const newToken = await db.token.create({
      data: {
        token: token,
        DiscordUser: {
          connect: {
            discordId: id,
          },
        },
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: "Token created",
        token: newToken.token,
      }),
      { status: 200 }
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        message:
          "It looks like your account isn't activated at the moment. To activate it, visit the verification.",
      }),
      {
        status: 500,
      }
    );
  }
};
