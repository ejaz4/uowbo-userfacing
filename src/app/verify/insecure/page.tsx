"use client";

import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { RotateCwIcon } from "lucide-react";
import Link from "next/link";

// import { Skeleton } from "@chakra-ui/skeleton";

const NotFoundVerifyPage = () => {
  return (
    <Card
      footerRight={
        <Link href={"/verify/discord"}>
          <Button label={"Try again"} image={<RotateCwIcon size={16} />} />
        </Link>
      }
    >
      <h2>Verify another way</h2>
      <p>In order to protect your account, you must verify another way.</p>
      <p>
        In any channel in the Discord server use the <code>/verify</code>{" "}
        command to get access to verify your account.
      </p>
      <p>If you can&apos;t do this, speak to admins about what to do next.</p>
    </Card>
  );
};

export default NotFoundVerifyPage;
