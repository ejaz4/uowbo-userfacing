import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as { code: string };

  if (!body.code) {
    return new NextResponse(JSON.stringify({ status: "No code provided" }), {
      status: 400,
    });
  }

  const user = await db.discordUser.findFirst({
    where: {
      link: {
        some: {
          helperCode: body.code,
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
          isExternal: true,
          fullName: true,
          helperCode: true,
        },
      },
    },
  });

  if (!user) {
    return new NextResponse(JSON.stringify({ status: "No user found" }), {
      status: 404,
    });
  }

  if (user.link.length == 0) {
    return new NextResponse(JSON.stringify({ status: "No link found" }), {
      status: 404,
    });
  }

  return new NextResponse(JSON.stringify(user), {
    status: 200,
  });
};
