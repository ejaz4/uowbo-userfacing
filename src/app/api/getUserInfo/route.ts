import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const secret = req.headers.get("x-secret");

  if (!req.body) {
    return new NextResponse(JSON.stringify({ message: "No body provided" }), {
      status: 400,
    });
  }

  const { id } = (await req.json()) as { id: string };

  if (secret !== process.env.SECRET) {
    return new NextResponse(JSON.stringify({ message: "Unauthorised" }), {
      status: 401,
    });
  }

  const userEntry = await db.discordUser.findUnique({
    where: {
      discordId: id,
    },
    select: {
      discordId: true,
      username: true,
      avatar: true,
      link: {
        where: {
          isVerified: true,
        },
      },
    },
  });

  if (!userEntry) {
    return new NextResponse(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  return new NextResponse(JSON.stringify(userEntry), { status: 200 });
};
