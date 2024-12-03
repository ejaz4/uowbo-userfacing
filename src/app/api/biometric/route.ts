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
      id: body.handover
    }, select: {
      DiscordUser: {
        select: {
          id: true,
          discordId: true
        }
      }
    }
  })

  if (!handover) {
    return new NextResponse(JSON.stringify({ status: "Handover does not exist" }), {
      status: 404,
    });
  }

  if (!handover.DiscordUser) {
    return new NextResponse(JSON.stringify({ status: "Handover does not have a DiscordUser" }), {
      status: 404,
    });
  }

  // Never trust the client, so store the client's claimed code
  const clientDetectedCode = body.code;

  // Check it yourself
  const worker = await createWorker("eng", 1, { workerPath: "./node_modules/tesseract.js/src/worker-script/node/index.js" });

  const imageData = body.image.split(",")[1];

  const buffer = Buffer.from(imageData, "base64");

  // console.log(body.image)
  const {
    data: { text },
  } = await worker.recognize(buffer);

  const textLines = text.split("\n");
  const lookingFor = body.code.slice(0, 8)

  let found = false;
  for (const text of textLines) {
    if (text.startsWith(lookingFor)) {
      found = true
    }
  }

  if (!found) {
    console.log("Not valid")
    return new NextResponse(JSON.stringify({
      status: "Not valid"
    })
    )
  }

  const biometricDb = await db.biometricEntry.create({
    data: {
      universityID: clientDetectedCode.slice(0, 7),
    }
  })

  if (!biometricDb) {
    return new NextResponse(JSON.stringify({
      status: "Failed to create biometric entry"
    }), {
      status: 500
    })
  }


  const link = await db.discordBiometric.create({
    data: {
      BiometricEntry: {
        connect: {
          id: biometricDb.id
        }
      },
      DiscordUser: {
        connect: {
          id: handover.DiscordUser.id
        }
      }
    }
  })

  if (!link) {
    return new NextResponse(JSON.stringify({
      status: "Failed to link biometric entry to DiscordUser"
    }), {
      status: 500
    })
  }


  const botConnection = await fetch(`${process.env.BOT_HOST}/verifyUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: handover.DiscordUser.discordId,
      verified: true
    }),
  });

  if (botConnection.status != 200) {
  
    return new NextResponse(JSON.stringify({
      status: "Failed to verify user with bot"
    }), {
      status: 500
    })
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
