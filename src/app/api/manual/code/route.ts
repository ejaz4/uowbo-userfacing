import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as { handover: string; code: string };

  if (!body.handover || !body.code) {
    return new NextResponse(
      JSON.stringify({ error: "Please provide a handover ID and a code." }),
      { status: 400 }
    );
  }

  // Get the handover from the database
  const handover = await db.handover.findFirst({
    where: {
      id: body.handover,
    },
    select: {
      DiscordUser: {
        select: {
          discordId: true,
          link: {
            select: {
              id: true,
              emailCode: true,
              emailVerification: {
                select: {
                  email: true,
                  isVerified: true,
                },
              },
              studentId: true,
              isVerified: true,
            },
          },
          guilds: {
            select: {
              Guilds: {
                select: {
                  guildId: true,
                  settings: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!handover) {
    return new NextResponse(JSON.stringify({ error: "Handover not found." }), {
      status: 404,
    });
  }

  const discordUser = handover.DiscordUser;

  if (!discordUser) {
    return new NextResponse(
      JSON.stringify({ error: "Discord user not found." }),
      { status: 404 }
    );
  }

  const links = discordUser.link;

  const findCodeEntry = links.find((link) => link.emailCode == body.code);

  if (!findCodeEntry) {
    return new NextResponse(
      JSON.stringify({ error: "The verification code is incorrect." }),
      { status: 403 }
    );
  }

  if (findCodeEntry.emailVerification) {
    await db.discordUniversity.update({
      where: {
        id: findCodeEntry.id,
      },
      data: {
        studentId: findCodeEntry.emailVerification.email
          .split("@")[0]
          .replace("w", ""),
      },
    });
    if (findCodeEntry.emailVerification.isVerified) {
      return new NextResponse(
        JSON.stringify({ error: "You're already verified." }),
        { status: 403 }
      );
    }
  }

  // Update the link

  const updateLink = await db.discordUniversity.update({
    where: {
      id: findCodeEntry.id,
    },
    data: {
      emailVerification: {
        update: {
          isVerified: true,
        },
      },
      isVerified: true,
    },
  });

  if (!updateLink) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to link your account." }),
      { status: 500 }
    );
  }

  const botConnection = await fetch(`${process.env.BOT_HOST}/verifyUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: discordUser.discordId,
      verified: true,
      method: "emailEntry",
      guilds: discordUser.guilds.map((guild) => {
        return {
          guildId: guild.Guilds?.guildId,
          settings: guild.Guilds!!.settings,
        };
      }),
    }),
  });

  if (!botConnection.ok) {
    return new NextResponse(
      JSON.stringify({ error: "Could not contact the gateway" }),
      { status: 500 }
    );
  }

  return new NextResponse(
    JSON.stringify({
      status: "success",
    }),
    { status: 200 }
  );
};
