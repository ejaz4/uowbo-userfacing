import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { handover, code } = (await req.json()) as {
    handover: string;
    code: string;
  };

  if (!code) {
    return new NextResponse(JSON.stringify({ message: "No code provided" }), {
      status: 400,
    });
  }

  if (!handover) {
    return new NextResponse(
      JSON.stringify({ message: "No handover ID provided" }),
      {
        status: 400,
      }
    );
  }

  const claimee = await db.discordUser.findFirst({
    where: {
      link: {
        some: {
          helperCode: code,
        },
      },
    },
    select: {
      discordId: true,
      username: true,
      avatar: true,
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
      link: {
        select: {
          id: true,
          isVerified: true,
          isExternal: true,
          fullName: true,
          helperCode: true,
        },
      },
    },
  });

  if (!claimee) {
    return new NextResponse(
      JSON.stringify({ message: "The claimee can't be found" }),
      {
        status: 404,
      }
    );
  }

  if (claimee.link.length == 0) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong." }),
      {
        status: 404,
      }
    );
  }

  if (!claimee.link[0].isExternal) {
    return new NextResponse(
      JSON.stringify({ message: "The claimee is not an external." }),
      {
        status: 403,
      }
    );
  }

  if (claimee.link[0].isVerified) {
    return new NextResponse(
      JSON.stringify({ message: "The claimee is already verified." }),
      {
        status: 403,
      }
    );
  }

  const hoEntry = await db.handover.findFirst({
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
              id: true,
              externalsHelped: true,
              isVerified: true,
              isExternal: true,
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
        message: "This handover hasn't been properly verified.",
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
    return new NextResponse(
      JSON.stringify({ message: "Verify yourself to help this person" }),
      {
        status: 403,
      }
    );
  }

  if (!hoEntry.DiscordUser.link[0].isVerified) {
    return new NextResponse(
      JSON.stringify({ message: "Verify yourself to help this person" }),
      {
        status: 403,
      }
    );
  }

  if (hoEntry.DiscordUser.link[0].isExternal) {
    return new NextResponse(
      JSON.stringify({
        message: "External users can't help other externals",
      }),
      {
        status: 403,
      }
    );
  }

  if (hoEntry.DiscordUser.link[0].externalsHelped.length >= 3) {
    return new NextResponse(
      JSON.stringify({
        message:
          "Your account is temporarily limited due to suspicious activity",
      }),
      {
        status: 403,
      }
    );
  }

  await db.discordUniversity.update({
    where: {
      id: hoEntry.DiscordUser.link[0].id,
    },
    data: {
      externalsHelped: {
        connect: {
          id: claimee.link[0].id,
        },
      },
    },
  });

  await db.discordUniversity.update({
    where: {
      id: claimee.link[0].id,
    },
    data: {
      isVerified: true,
    },
  });

  const botConnection = await fetch(`${process.env.BOT_HOST}/verifyUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: claimee.discordId,
      verified: true,
      method: "externalEntry",
      guilds: claimee.guilds.map((guild) => {
        return {
          guildId: guild.Guilds?.guildId,
          settings: guild.Guilds!!.settings,
        };
      }),
    }),
  });

  return new NextResponse(JSON.stringify({ message: "Verified." }), {
    status: 200,
  });
};
