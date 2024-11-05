"use client";

import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { RotateCwIcon } from "lucide-react";
import Link from "next/link";

// import { Skeleton } from "@chakra-ui/skeleton";

export const NotFoundVerifyPage = () => {
  return (
    <Card
      footerRight={
        <Link href={"/verify/discord"}>
          <Button label={"Try again"} image={<RotateCwIcon size={16} />} />
        </Link>
      }
    >
      <h2>Flow doesn&apos;t exist</h2>
      <p>Link expired or the interaction did not exist.</p>
      <p>
        In any channel in the Discord server use the <code>/verify</code>{" "}
        command to get access to verify your account.
      </p>
    </Card>
  );
};

export default NotFoundVerifyPage;
