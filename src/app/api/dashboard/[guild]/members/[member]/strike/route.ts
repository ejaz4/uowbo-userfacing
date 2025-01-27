import { db } from "@/libs/db";
import { logWithModerator } from "@/libs/logging";
import { isAllowedOnGuild, verifyToken } from "@/libs/token";
import { Federated, HitType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      guild: string;
      member: string;
    }>;
  }
) => {
  const p = await params;

  const body = (await req.json()) as {
    reason: string;
    federate: boolean;
    type: HitType;
  };

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

  if (!(await isAllowedOnGuild(token, p.guild))) {
    return new NextResponse(
      JSON.stringify({
        message:
          "You aren't authorised to make changes to this guild, you must be a moderator or owner.",
      }),
      {
        status: 403,
      }
    );
  }

  const user = await db.discordUser.findUnique({
    where: {
      discordId: p.member,
    },
    select: {
      username: true,
      discordId: true,
      link: {
        select: {
          id: true,
        },
      },
      guilds: {
        select: {
          id: true,
          guildsId: true,
          Guilds: {
            select: {
              id: true,
              guildId: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    return new NextResponse(
      JSON.stringify({
        message: "Member not found",
      }),
      {
        status: 404,
      }
    );
  }

  if (!user.link) {
    return new NextResponse(
      JSON.stringify({
        message: "Member not verified yet",
      }),
      {
        status: 404,
      }
    );
  }

  const guildLink = user.guilds.find((g) => g.Guilds?.guildId == p.guild);
  console.log(user.guilds, guildLink);

  if (!guildLink) {
    return new NextResponse(
      JSON.stringify({
        message: "Member not found in guild",
      }),
      {
        status: 404,
      }
    );
  }

  let federated: Federated = Federated.NOT_FEDERATED;
  const reasons = [
    "cuss",
    "fighting",
    "politic",
    "swearing",
    "spam",
    "NSFW",
    "advertising",
    "promo",
    "cursing",
    "racism",
    "hate",
    "speech",
    "insulting",
    "bullying",
    "harassment",
    "threats",
    "death",
    "dox",
    "sex",
    "harassment",
  ];

  if (body.federate) {
    federated = Federated.REJECTED;

    for (const r of reasons) {
      if (body.reason.toLowerCase().includes(r)) {
        federated = Federated.ACCEPTED;
        break;
      }
    }
  }

  if (body.type == HitType.PARDON) {
    federated = body.federate ? Federated.ACCEPTED : Federated.NOT_FEDERATED;
  }

  const strike = await db.authorityHit.create({
    data: {
      reason: body.reason,
      DiscordUniversity: {
        connect: {
          id: user.link[0].id,
        },
      },
      Guilds: {
        connect: {
          id: guildLink.Guilds?.id,
        },
      },
      type: body.type,
      federated: federated,
    },
  });

  await logWithModerator(
    `${body.type == HitType.STRIKE ? "striked" : "pardoned"} @${
      user.username
    } (${user.discordId}) for ${body.reason}`,
    p.guild,
    token
  );

  if (!strike) {
    return new NextResponse(
      JSON.stringify({
        message: "Failed to strike member",
      }),
      {
        status: 500,
      }
    );
  }

  return new NextResponse(
    JSON.stringify({
      message: "Member struck",
    }),
    {
      status: 200,
    }
  );
};
