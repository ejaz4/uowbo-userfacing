import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as {
    handover: string;
    code: string;
  };

  if (!body.handover || !body.code) {
    return new NextResponse(
      JSON.stringify({
        status: "Fields are missing",
      }),
      {
        status: 400,
      }
    );
  }

  // Open the handover
  const handover = await db.handover.findFirst({
    where: {
      id: body.handover,
    },
    select: {
      code: true,
      isVerified: true,
    },
  });

  // Check if the handover exists
  if (!handover) {
    return new NextResponse(
      JSON.stringify({
        status: "Handover does not exist",
      }),
      {
        status: 404,
      }
    );
  }

  if (handover.code != body.code) {
    return new NextResponse(
      JSON.stringify({
        status: "Invalid code",
      }),
      {
        status: 403,
      }
    );
  }

  const handoverChange = await db.handover.update({
    where: {
      id: body.handover,
    },
    data: {
      isVerified: true,
    },
  });

  if (!handoverChange) {
    return new NextResponse(
      JSON.stringify({
        status: "Failed to verify handover",
      }),
      {
        status: 500,
      }
    );
  }

  return new NextResponse(
    JSON.stringify({
      status: "verified",
    }),
    {
      status: 200,
    }
  );
};
