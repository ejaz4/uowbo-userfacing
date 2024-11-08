"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { DiscordDisplay } from "@/app/_components/profileDisplay/discord";
import { Skeleton } from "@/app/_components/skeleton/skeleton";
import { Card } from "@/app/_components/card/card";
import Link from "next/link";
import { Button } from "@/app/_components/button/button";
import { LinkIcon } from "lucide-react";
// import { Skeleton } from "@chakra-ui/skeleton";

const HandoverPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
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

      if (!data.isVerified) {
        return router.push(`/verify/${handoverId}/authwall`);
      }

      setUsername(data.DiscordUser.username);
      setAvatar(data.DiscordUser.avatar);
      setId(data.DiscordUser.discordId);
      setLoading(false);
    })();
  }, [handoverId, router]);

  return (
    <Card
      footerRight={
        <Link href={`/verify/${handoverId}/mail`}>
          <Button image={<LinkIcon size={16} />} label="Link" />
        </Link>
      }
    >
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
          <p>
            By linking, you agree to follow the rules of the Computer Science @
            uow Discord server and also agree to how uowbo!{" "}
            <Link href={"/privacy"}>processes your data</Link>.
          </p>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Skeleton width={"100%"} height={16} count={2}></Skeleton>
            <Skeleton width={"60%"} height={16} count={1}></Skeleton>
          </div>
        </>
      )}
    </Card>
  );
};

export default HandoverPage;
