import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ guild: string }> }
) => {
  const p = await params;

  const botFetch = await fetch(
    `${process.env.BOT_HOST}/guild/${p.guild}/roles`,
    {
      headers: {
        "x-secret": process.env.SECRET,
      },
    }
  );

  if (botFetch.status != 200) {
    return new NextResponse(
      JSON.stringify({
        error: "Failed to fetch roles",
      }),
      {
        status: 500,
      }
    );
  }

  return new NextResponse(JSON.stringify(await botFetch.json()), {
    status: 200,
  });
};
