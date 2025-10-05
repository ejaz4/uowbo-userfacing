import { db } from "@/libs/db";
import { verifyToken } from "@/libs/token";
import { Event } from "@prisma/client";
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

export const PATCH = async (
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
  const token = req.headers.get("authorization") as string;

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

  const guild = await db.guilds.findFirst({
    where: {
      events: {
        some: {
          id,
        },
      },
      members: {
        some: {
          OR: [
            {
              isMod: true,
            },
            {
              isOwner: true,
            },
          ],
        },
      },
    },
  });

  if (!guild) {
    return new NextResponse(
      JSON.stringify({
        error:
          "Either you aren't allowed to modify this event, or this event does not exist on any of your tenants.",
      }),
      { status: 403 }
    );
  }

  const body = (await req.json()) as Partial<Event>;

  await db.event.update({
    where: {
      id,
    },
    data: {
      id,
      ...body,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: "ok",
    })
  );
};
