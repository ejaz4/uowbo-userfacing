import { useEffect, useState } from "react";
import { useToken } from "./useToken";
import { GuildSettings } from "@prisma/client";

export const useModGuilds = () => {
  const token = useToken();
  const [guilds, setGuilds] = useState<
    {
      Guilds: {
        guildId: string;
        guildName: string;
        guildIcon: string;
        settings: GuildSettings[];
      };
      isMod: boolean;
      isOwner: boolean;
    }[]
  >([]);

  useEffect(() => {
    if (!token) return;

    fetch("/api/dashboard/guilds", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setGuilds(data);
        });
      }
    });
  }, [token]);

  return guilds;
};
