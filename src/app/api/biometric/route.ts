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

  // Never trust the client, so store the client's claimed code
  const clientDetectedCode = body.code;

  // Check it yourself
  const worker = await createWorker("eng");

  const imageData = body.image.split(",")[1];

  const buffer = Buffer.from(imageData, "base64");

  const {
    data: { text },
  } = await worker.recognize(buffer);

  console.log("Detected text:", text);
};
