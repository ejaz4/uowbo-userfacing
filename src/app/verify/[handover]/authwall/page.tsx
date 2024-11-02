"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { DiscordDisplay } from "@/app/_components/profileDisplay/discord";
import { Skeleton } from "@/app/_components/skeleton/skeleton";
import { Card } from "@/app/_components/card/card";
// import { Skeleton } from "@chakra-ui/skeleton";

export const HandoverPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const reqHandover = await fetch("/api/getHandover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          handover: handoverId,
        }),
      });

      if (!reqHandover.ok) {
        return;
      }

      const data = (await reqHandover.json()) as {
        DiscordUser: {
          discordId: string;
          username: string;
          avatar: string;
        };
        isVerified: boolean;
      };

      if (data.isVerified) {
        return router.push(`/verify/${handoverId}`);
      }

      setUsername(data.DiscordUser.username);
      setAvatar(data.DiscordUser.avatar);
    })();
  }, []);

  return (
    <Card>
      {username && <h2>Check your DMs, {username}</h2>}
      {!username && <Skeleton height={16} width={170} />}
      <p>
        We&apos;ve sent you a direct message on Discord with a verification
        code. Please enter it here to continue.
        <br />
        Alternatively, you can use <code>/verify</code> in any channel in the
        server to skip this step.
      </p>
      <DiscordDisplay username={username} avatarUrl={avatar} verified={false} />

      <input type="text" placeholder={"Verification Code"} />
    </Card>
  );
};

export default HandoverPage;
