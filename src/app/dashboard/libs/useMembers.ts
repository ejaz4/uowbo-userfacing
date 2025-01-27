import { useEffect, useState } from "react";
import { useToken } from "./useToken";

export type Member = {
  DiscordUser: {
    discordId: string;
    username: string;
    avatar: string;
    link: {
      emailVerificationId: string | undefined | null;
      biometricEntryId: string | undefined | null;
      studentId: string;
      isVerified: boolean;
    }[];
  };
  isMod: boolean;
  isOwner: boolean;
};

export const useMembers = (guildId: string) => {
  const token = useToken();
  const [members, setMembers] = useState<Member[]>();

  useEffect(() => {
    if (!token) return;
    if (!guildId) return;

    fetch(`/api/dashboard/${guildId}/members`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setMembers(data);
        });
      }
    });
  }, [token, guildId]);

  return members;
};
