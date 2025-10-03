import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) => {
  const p = await params;
  const id = p.id;

  const event = await db.event.findUnique({
    where: {
      id,
    },
  });

  if (!event) {
    return new NextResponse(
      JSON.stringify({
        message:
          "You aren't authorised to make changes to this guild, you must be a moderator or owner.",
      }),
      {
        status: 404,
      }
    );
  }
};
