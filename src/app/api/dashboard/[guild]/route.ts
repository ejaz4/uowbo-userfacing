import { db } from "@/libs/db";
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

  const guild = await db.guilds.findUnique({
    where: {
      guildId: p.guild,
    },
    select: {
      guildId: true,
      guildName: true,
      guildIcon: true,
      settings: true,
    },
  });

  return new NextResponse(JSON.stringify(guild), {
    status: 200,
  });
};
