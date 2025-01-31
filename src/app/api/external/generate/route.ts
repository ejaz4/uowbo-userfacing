import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { handover, fullName } = (await req.json()) as {
    handover: string;
    fullName: string;
  };

  if (!fullName.trim()) {
    return new NextResponse(JSON.stringify({ message: "Missing full name" }), {
      status: 400,
    });
  }

  //   Check if the full name is only made of letters
  if (!/^[a-zA-Z ]+$/.test(fullName)) {
    return new NextResponse(
      JSON.stringify({
        message: "Your full name must consist of only letters.",
      }),
      {
        status: 400,
      }
    );
  }

  if (!handover) {
    return new NextResponse(
      JSON.stringify({ message: "Missing handover ID" }),
      {
        status: 400,
      }
    );
  }

  // Get the handover, more specifically the DiscordUser associated with it.
  const hoEntry = await db.handover.findUnique({
    where: {
      id: handover,
    },
    select: {
      DiscordUser: {
        select: {
          discordId: true,
          id: true,

          link: {
            select: {
              isVerified: true,
              isExternal: true,
              fullName: true,
              helperCode: true,
            },
          },
        },
      },
      isVerified: true,
    },
  });

  if (!hoEntry) {
    return new NextResponse(JSON.stringify({ message: "Handover not found" }), {
      status: 404,
    });
  }

  if (!hoEntry.isVerified) {
    return new NextResponse(
      JSON.stringify({
        status: 403,
        body: "This handover hasn't been properly verified.",
      }),
      {
        status: 403,
      }
    );
  }

  if (!hoEntry.DiscordUser) {
    return new NextResponse(
      JSON.stringify({ message: "Discord user not found" }),
      {
        status: 403,
      }
    );
  }

  if (hoEntry.DiscordUser.link.length == 0) {
    await db.discordUniversity.create({
      data: {
        DiscordUser: {
          connect: {
            id: hoEntry.DiscordUser.id,
          },
        },
      },
    });
  } else {
    if (hoEntry.DiscordUser.link[0].isVerified) {
      return new NextResponse(
        JSON.stringify({
          message: "This user has already been verified",
        }),
        {
          status: 403,
        }
      );
    }

    if (hoEntry.DiscordUser.link[0].isExternal) {
      return new NextResponse(
        JSON.stringify({
          message: "You're already an external",
          code: hoEntry.DiscordUser.link[0].helperCode,
        }),
        {
          status: 200,
        }
      );
    }
  }

  const code = Math.floor(100000 + Math.random() * 900000);

  // Update the link
  await db.discordUniversity.updateMany({
    where: {
      DiscordUser: {
        id: hoEntry.DiscordUser.id,
      },
    },
    data: {
      isExternal: true,
      helperCode: code.toString(),
      fullName,
    },
  });

  return new NextResponse(
    JSON.stringify({
      message: "Successfully generated a helper code",
      code,
    }),
    {
      status: 200,
    }
  );
};
