"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { DiscordDisplay } from "@/app/_components/profileDisplay/discord";
import { Skeleton } from "@/app/_components/skeleton/skeleton";
import { Card } from "@/app/_components/card/card";
// import { Skeleton } from "@chakra-ui/skeleton";

export const HandoverPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");

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
      };

      setUsername(data.DiscordUser.username);
      setAvatar(data.DiscordUser.avatar);
      setId(data.DiscordUser.discordId);
      setLoading(false);
    })();
  }, []);

  return (
    <Card>
      {!loading && (
        <>
          <h2>Let&apos;s link your account, {username}</h2>
          <p>
            To continue linking your Discord server profile to your University
            of Westminster account, click Link.
          </p>
          <DiscordDisplay
            username={username}
            avatarUrl={avatar}
            verified={false}
          />
        </>
      )}

      {loading && (
        <>
          <Skeleton width={"40%"} height={16}></Skeleton>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Skeleton width={"100%"} height={16} count={2}></Skeleton>
          </div>
          <DiscordDisplay
            username={username}
            avatarUrl={avatar}
            verified={false}
          />
        </>
      )}
    </Card>
  );
};

export default HandoverPage;
