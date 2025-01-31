import { DiscordUniversity } from "@prisma/client";
import { useEffect, useState } from "react";

export const useLink = (handoverId: string) => {
  const [link, setLink] = useState<Partial<DiscordUniversity> | null>(null);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    if (!handoverId) return;
    if (!loaded) return;

    setLoaded(false);

    fetch(`/api/getLink`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handover: handoverId,
      }),
    }).then(async (res) => {
      if (!res.ok) {
        return;
      }

      const data = (await res.json()) as Partial<DiscordUniversity>;

      setLink(data);

      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    });
  }, [handoverId, loaded]);

  return link;
};
