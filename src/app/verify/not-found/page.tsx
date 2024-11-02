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
      <h2>We couldn&apos;t find you</h2>
      <p>
        Your username could not be found in the server. Please try again or use
        the <code>/verify</code> command in any channel in the server to skip
        this step.
      </p>
    </Card>
  );
};

export default NotFoundVerifyPage;
