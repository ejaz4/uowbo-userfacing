import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import { createWorker } from "tesseract.js";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as {
    image: string;
    handover: string;
    code: string;
  };

  if (!body.handover || !body.image || !body.code) {
    return new NextResponse(JSON.stringify({ status: "Missing parameters" }), {
      status: 400,
    });
  }

  const handover = await db.handover.findUnique({
    where: {
      id: body.handover,
    },
    select: {
      DiscordUser: {
        select: {
          id: true,
          discordId: true,
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
    return new NextResponse(
      JSON.stringify({ status: "Handover does not exist" }),
      {
        status: 404,
      }
    );
  }

  if (!handover.DiscordUser) {
    return new NextResponse(
      JSON.stringify({ status: "Handover does not have a DiscordUser" }),
      {
        status: 404,
      }
    );
  }

  // Never trust the client, so store the client's claimed code
  const clientDetectedCode = body.code;

  // Check it yourself
  const worker = await createWorker("eng", 1, {
    workerPath: "./node_modules/tesseract.js/src/worker-script/node/index.js",
  });

  const imageData = body.image.split(",")[1];

  const buffer = Buffer.from(imageData, "base64");

  const {
    data: { text },
  } = await worker.recognize(buffer);

  const textLines = text.split("\n");
  const lookingFor = body.code.slice(0, 8);

  let found = false;
  for (const text of textLines) {
    if (text.startsWith(lookingFor)) {
      found = true;
    }
  }

  if (!found) {
    return new NextResponse(
      JSON.stringify({
        status: "Not valid",
      })
    );
  }

  let existingLink = await db.discordUniversity.findFirst({
    where: {
      DiscordUser: {
        discordId: handover.DiscordUser.id,
      },
    },
  });

  if (existingLink) {
    if (existingLink.isExternal) {
      return new NextResponse(
        JSON.stringify({
          status:
            "You can't verify this way as you told us you're an external.",
        }),
        {
          status: 403,
        }
      );
    }

    if (existingLink.studentId == clientDetectedCode.slice(0, 7)) {
      existingLink = await db.discordUniversity.update({
        where: {
          id: existingLink.id,
        },
        data: {
          BiometricEntry: {
            create: {
              universityID: clientDetectedCode.slice(0, 7),
            },
          },
          isVerified: true,
        },
      });
    } else {
      return new NextResponse(JSON.stringify({ status: "Not valid" }), {
        status: 403,
      });
    }
  } else {
    existingLink = await db.discordUniversity.create({
      data: {
        BiometricEntry: {
          create: {
            universityID: clientDetectedCode.slice(0, 7),
          },
        },
        studentId: clientDetectedCode.slice(0, 7),
        isVerified: true,
      },
    });
  }

  if (!existingLink) {
    return new NextResponse(
      JSON.stringify({
        status: "Failed to create biometric entry",
      }),
      {
        status: 500,
      }
    );
  }

  const botConnection = await fetch(`${process.env.BOT_HOST}/verifyUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: handover.DiscordUser.discordId,
      verified: true,
      method: "biometricEntry",
      guilds: handover.DiscordUser.guilds.map((guild) => {
        return {
          guildId: guild.Guilds?.guildId,
          settings: guild.Guilds!!.settings,
        };
      }),
    }),
  });

  if (botConnection.status != 200) {
    return new NextResponse(
      JSON.stringify({
        status: "Failed to verify user with bot",
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
