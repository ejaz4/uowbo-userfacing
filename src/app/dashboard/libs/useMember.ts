import { useEffect, useState } from "react";
import { Member } from "./useMembers";
import { useToken } from "./useToken";
import {
  AuthorityHit,
  BiometricEntry,
  EmailVerification,
  Federated,
  GuildMessage,
  HitType,
} from "@prisma/client";

export type MemberInGuild = {
  discordId: string;
  username: string;
  avatar: string | null;
  link: {
    isVerified: boolean;
    emailVerification: EmailVerification | null;
    studentId: string;
    BiometricEntry: BiometricEntry | null;
    authorityHits: {
      id: string;
      createdAt: string;
      type: HitType;
      federated: Federated;
      reason: string;
      Guilds: {
        guildId: string;
      };
    }[];
  }[];
  guilds: {
    messages: GuildMessage[];
    isMod: boolean;
    isOwner: boolean;
  }[];
};

export const useMember = (memberId: string, guildId: string) => {
  const [member, setMember] = useState<MemberInGuild | null>(null);
  const [loaded, setLoaded] = useState(true);
  const token = useToken();

  useEffect(() => {
    if (!memberId) return;
    if (!guildId) return;
    if (!token) return;
    if (!loaded) return;

    setLoaded(false);

    const ls = window.localStorage;

    fetch(`/api/dashboard/${guildId}/members/${memberId}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.status === 404) {
          console.error(
            `Member with ID ${memberId} not found in guild ${guildId}`
          );
        }
        return res.json();
      })
      .then((data) => {
        setMember(data);
        setTimeout(() => setLoaded(true), 1000);
      });
  }, [memberId, guildId, token, loaded]);

  return member;
};
