import { DiscordUniversity, DiscordUser } from "@prisma/client";
import { useEffect, useState } from "react";

export const useHelperCode = (code: string) => {
  const [user, setUser] = useState<Partial<
    DiscordUser & { link: Partial<DiscordUniversity>[] }
  > | null>(null);

  useEffect(() => {
    if (!code) return;

    fetch(`/api/getHelperCode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
      }),
    }).then(async (res) => {
      if (!res.ok) {
        return;
      }

      const data = (await res.json()) as Partial<
        DiscordUser & { link: Partial<DiscordUniversity>[] }
      >;

      setUser(data);
    });
  }, [code]);

  return user;
};
