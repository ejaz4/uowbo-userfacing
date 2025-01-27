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
  const p = await params;
  const guildId = p.guild;
  const token = req.headers.get("Authorization");
  const searchParams = req.nextUrl.searchParams;
  const lastLog = searchParams.get("lastLog");

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

  if (!(await isAllowedOnGuild(token, guildId))) {
    return new NextResponse(
      JSON.stringify({
        message: "You aren't allowed on this guild.",
      }),
      {
        status: 403,
      }
    );
  }

  const logs = await db.guildLog.findMany({
    where: {
      Guilds: {
        guildId: guildId,
      },
    },
    take: 25,
    skip: lastLog ? 1 : 0,
    orderBy: {
      createdAt: "desc",
    },
    cursor: lastLog
      ? {
          id: lastLog ? lastLog : undefined,
        }
      : undefined,
  });

  return new NextResponse(JSON.stringify([...logs]), {
    status: 200,
  });
};
