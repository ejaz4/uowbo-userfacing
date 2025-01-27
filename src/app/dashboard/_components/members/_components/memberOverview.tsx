import { MemberInGuild } from "@/app/dashboard/libs/useMember";
import styles from "./memberList.module.css";
import React, { useEffect, useState } from "react";
import { IdCardIcon, MailIcon, VenetianMaskIcon } from "lucide-react";
import { Skeleton } from "@/app/_components/skeleton/skeleton";
import { useGuildSettings } from "@/app/dashboard/libs/useGuild";
import { Federated, GuildSettings, HitType } from "@prisma/client";

export const MemberOverview = ({
  member,
  guildId,
}: {
  member?: MemberInGuild | null;
  guildId: string;
}) => {
  const [settings, loaded] = useGuildSettings(guildId);
  const [federated, setFederated] = useState(false);
  const [strikes, setStrikes] = useState(0);

  useEffect(() => {
    if (loaded == false) return;
    if (settings == null) return;

    setFederated((settings as GuildSettings).usesUowboNet);
  }, [loaded, settings]);

  useEffect(() => {
    if (member == null) return;

    if (member.link.length == 0) {
      setStrikes(0);
      return;
    }

    let pardons = member.link[0].authorityHits.filter(
      (hit) => hit.type == HitType.PARDON
    );
    let strikes = member.link[0].authorityHits.filter(
      (hit) => hit.type == HitType.STRIKE
    );

    if (federated) {
      strikes = strikes.filter(
        (hit) =>
          hit.Guilds.guildId == guildId || hit.federated == Federated.ACCEPTED
      );

      pardons = pardons.filter(
        (hit) =>
          hit.Guilds.guildId == guildId || hit.federated == Federated.ACCEPTED
      );

      setStrikes(strikes.length - pardons.length);
    } else {
      setStrikes(
        strikes.filter((hit) => hit.Guilds.guildId == guildId).length -
          pardons.filter((hit) => hit.Guilds.guildId == guildId).length
      );
    }
  }, [member, federated]);

  if (!member) {
    return (
      <div className={styles.memberOverview}>
        <div className={`${styles.memberImage} ${styles.memberImageBig}`}></div>
        <div className={styles.memberOverviewInfo}>
          <div className={styles.memberBadges}>
            <Skeleton width={100} height={24} borderRadius={8} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.memberOverview}>
      <div className={`${styles.memberImage} ${styles.memberImageBig}`}>
        {member?.avatar && <img src={member.avatar} alt={member.username} />}
        {member?.avatar == null && <VenetianMaskIcon size={42} />}
      </div>
      <div className={styles.memberOverviewInfo}>
        <div className={styles.memberBadges}>
          <h1>{member.username}</h1>
          {member.link.length != 0 && (
            <>
              {member.link[0].isVerified && (
                <div className={styles.label}>
                  <p>Verified</p>
                </div>
              )}
              {member.link[0].emailVerification && (
                <div className={styles.label}>
                  <MailIcon size={16} />
                </div>
              )}
              {member.link[0].BiometricEntry && (
                <div className={styles.label}>
                  <IdCardIcon size={16} />
                </div>
              )}
            </>
          )}
        </div>
        {member.link[0] && (
          <p>
            w{member.link[0].studentId} - {strikes} strike
            {strikes == 1 ? "" : "s"}
          </p>
        )}
      </div>
    </div>
  );
};
