"use client";

import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// import { Skeleton } from "@chakra-ui/skeleton";

const CardExplainerPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;

  const transparencyNotice = [
    "The images of your university card and face are processed and checked on-device. However, if you do pass the local checks, the image of your university card is uploaded to the uowbo servers for further automated tests and checks. If you do not pass the local checks, no images will leave your device.",
    "The tests and checks that are performed by uowbo are for the sole-purpose to verify that you are the owner of the account you are trying to link.",
    "There are times where uowbo may not be able to verify you through card verification despite following the steps correctly. In these cases, you should retry verify or use an alternative verification method.",
  ];

  return (
    <Card
      footerRight={
        <Link href={`/verify/${handoverId}/card/flow`}>
          <Button
            label={"Next"}
            direction="rtl"
            image={<ChevronRight size={16} />}
          />
        </Link>
      }
    >
      <h2>Card verification</h2>
      <p>
        You&apos;ll need to use a smartphone or tablet to perform card
        verification.
      </p>
      <p>
        You will be asked to scan the ID side of your university card and then
        take a picture of your own face.
      </p>
      <h2>Transparency notice</h2>
      <textarea
        value={transparencyNotice.join("\n")}
        style={{
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          height: 200,
          boxSizing: "border-box",
        }}
        readOnly
        disabled
      ></textarea>
    </Card>
  );
};

export default CardExplainerPage;
