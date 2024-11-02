"use client";

import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { KeyIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// import { Skeleton } from "@chakra-ui/skeleton";

export const DiscordUsernamePage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const submit = async () => {
    const check = await fetch("/api/manual/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    });

    const checkJson = (await check.json()) as {
      error?: string;
      moveTo: string;
    };

    router.push(checkJson.moveTo);
  };

  return (
    <Card
      footerRight={
        <Button
          label={"Verify"}
          onclick={submit}
          image={<KeyIcon size={16} />}
        />
      }
    >
      <h2>Verify manually</h2>
      <p>
        Enter your Discord username to begin verifying your account.
        <br />
        Alternatively, you can use the <code>/verify</code> command in any
        channel in the server to skip this step.
      </p>

      <input type="text" onKeyUp={(e) => setUsername(e.currentTarget.value)} />
    </Card>
  );
};

export default DiscordUsernamePage;
