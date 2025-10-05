import { DiscordUser, Guilds, GuildUser } from "@prisma/client";
import { useEffect, useState } from "react";

type MeClient = {
  avatar?: string;
  username: string;
  guilds: (GuildUser & {
    Guild: Guilds;
  })[];
};

export const useMe = (token: string | null) => {
  const [me, setMe] = useState<MeClient | null>(null);
  const [failure, setFailure] = useState<boolean>(false);

  useEffect(() => {
    if (!token) return;

    fetch("/api/users/me", {
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      if (!res.ok) {
        return setFailure(true);
      }

      res
        .json()
        .then((data) => {
          setMe(data);
        })
        .catch((e) => setFailure(true));
    });
  }, [token]);

  return {
    data: me,
    isFailed: failure,
  };
};
