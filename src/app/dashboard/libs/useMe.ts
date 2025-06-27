import { GuildUser, DiscordUser } from "@prisma/client";
import { useEffect, useState } from "react";
import { useToken } from "./useToken";

export const useMe = (guildId: string) => {
  const [me, setMe] = useState<Partial<GuildUser> | null>();
  const token = useToken();
  useEffect(() => {
    if (!token) return;
    if (!guildId) return;

    fetch(`/api/dashboard/${guildId}/me`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return setMe(null);
        }
        return res.json();
      })
      .then((data: Partial<GuildUser & { DiscordUser: DiscordUser }>) => {
        setMe(data);
        localStorage.setItem("@me", JSON.stringify(data.DiscordUser));
      });
  }, [guildId, token]);

  return me;
};

export const useCachedMe = () => {
  const [cachedMe, setCachedMe] = useState<Partial<DiscordUser> | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem("@me");
    if (cached) {
      setCachedMe(JSON.parse(cached));
    }
  }, []);

  return cachedMe;
};
