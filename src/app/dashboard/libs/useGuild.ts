import { GuildSettings } from "@prisma/client";
import { useEffect, useState } from "react";
import { useToken } from "./useToken";

export const useGuild = (guildId: string) => {
  const [guild, setGuild] = useState<{
    guildId: string;
    guildName: string;
    guildIcon?: string;
  } | null>(null);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);

    fetch(`/api/dashboard/${guildId}`)
      .then((res) => res.json())
      .then((data) => {
        setGuild(data);
        setTimeout(() => {
          setLoaded(true);
        }, 1000);
      });
  }, [guildId, loaded]);

  return guild;
};

export const useGuildSettings = (guildId: string | null) => {
  const [settings, setSettings] = useState<GuildSettings | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = useToken();

  const setNewSettings = async (newSettings: Partial<GuildSettings>) => {
    if (guildId === null) return;
    if (!token) return;

    const settingsReq = await fetch(`/api/dashboard/${guildId}/settings`, {
      headers: {
        Authorization: token,
      },
      method: "POST",
      body: JSON.stringify(newSettings),
    });

    if (settingsReq.status != 200) {
      setSettings(Object.assign({}, settings, newSettings));
    } else {
      // TODO: handle failed saves
    }
  };

  useEffect(() => {
    if (guildId === null) return;
    if (!token) return;
    if (!loading) return;

    setLoading(false);

    fetch(`/api/dashboard/${guildId}/settings`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSettings(data[0] || null);
        setLoaded(true);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      });
  }, [guildId, token, loading]);

  useEffect(() => {
    console.log(settings);
  }, [loaded]);

  return [settings, loaded, setNewSettings];
};
