import { db } from "@/libs/db";
import { customLog } from "@/libs/logging";
import { updateModerators } from "@/libs/moderators";
import {
  verifyToken,
  isAllowedOnGuild,
  getDiscordIdFromToken,
} from "@/libs/token";
import { GuildSettings } from "@prisma/client";
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
  const token = req.headers.get("authorization") as string;
  const p = await params;

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

  const guild = p.guild;
  const isUserAllowed = await isAllowedOnGuild(token, guild);

  if (!isUserAllowed) {
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

  const dbEntry = await db.guilds.findUnique({
    where: {
      guildId: guild,
    },
    select: {
      settings: true,
    },
  });

  if (!dbEntry) {
    return new NextResponse(
      JSON.stringify({
        message: "Guild not found",
      }),
      {
        status: 404,
      }
    );
  }

  return new NextResponse(JSON.stringify(dbEntry.settings), {
    status: 200,
  });
};

export const POST = async (
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
  const guild = p.guild;
  let body = (await req.json()) as Partial<GuildSettings>;

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

  const userId = await getDiscordIdFromToken(token);
  const isUserAllowed = await isAllowedOnGuild(token, guild);

  if (!isUserAllowed) {
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

  if (!userId) {
    return new NextResponse(
      JSON.stringify({
        message: "User not found",
      }),
      {
        status: 403,
      }
    );
  }

  const userEntry = await db.guildUser.findFirst({
    where: {
      DiscordUser: {
        discordId: userId,
      },
      Guilds: {
        guildId: guild,
      },
    },
  });

  if (!userEntry) {
    return new NextResponse(
      JSON.stringify({
        message: "User not found in guild",
      }),
      {
        status: 404,
      }
    );
  }

  if (!userEntry.isOwner) {
    return new NextResponse(
      JSON.stringify({
        message: "You must be the owner of the guild to change settings",
      }),
      {
        status: 403,
      }
    );
  }

  const existingSettings = await db.guilds.findUnique({
    where: {
      guildId: guild,
    },
    select: {
      settings: true,
    },
  });

  if (body.id) {
    delete body.id;
  }

  if (body.guildsId) {
    delete body.guildsId;
  }

  if (body.moderatorRoleId) {
    updateModerators(guild, body.moderatorRoleId);
  }

  if (existingSettings?.settings.length == 0) {
    await db.guildSettings.create({
      data: {
        Guilds: {
          connect: {
            guildId: guild,
          },
        },
        verifiedRoleId: body.verifiedRoleId,
        moderatorRoleId: body.moderatorRoleId,

        allowsBiometricEntry: body.allowsBiometricEntry,
        allowsEmailEntry: body.allowsEmailEntry,

        usesUowboNet: body.usesUowboNet,
      },
    });

    updateModerators(guild, body.moderatorRoleId!!);

    return new NextResponse(
      JSON.stringify({
        message: "Settings updated",
      }),
      {
        status: 200,
      }
    );
  }

  const existingSettingsId = existingSettings?.settings[0].id;

  try {
    await db.guildSettings.update({
      where: {
        id: existingSettingsId,
      },
      data: {
        ...body,
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: "Settings updated",
      }),
      {
        status: 200,
      }
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        message: "Error updating settings",
      }),
      {
        status: 500,
      }
    );
  }
};
