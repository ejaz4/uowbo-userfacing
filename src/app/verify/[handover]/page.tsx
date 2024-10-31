"use client";
import { Handover } from "@prisma/client";
import { useEffect, useState } from "react";

export const HandoverPage = ({
  params,
}: {
  params: {
    handover: string;
  };
}) => {
  const handoverId = params.handover;
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
    })();
  }, []);

  return (
    <>
      <p>Name: {username}</p>
      <p>ID: {id}</p>
      <img src={avatar} alt="" />
    </>
  );
};

export default HandoverPage;
