import { Member } from "@/app/dashboard/libs/useMembers";
import styles from "./memberList.module.css";
import {
  IdCardIcon,
  MailIcon,
  PenOffIcon,
  VenetianMaskIcon,
} from "lucide-react";
import { Skeleton } from "@/app/_components/skeleton/skeleton";
import { useMember } from "@/app/dashboard/libs/useMember";
import { useEffect } from "react";
import { MemberOverview } from "./memberOverview";
import { ContactList } from "./contactList";
import { ModerateList } from "./moderateList";
import { MessageList } from "./messageList";

export const MemberInList = ({
  member,
  selectedMemberId,
  setSelectedMemberId,
}: {
  member?: Member;
  selectedMemberId: string;
  setSelectedMemberId: (memberId: string) => void;
}) => {
  if (!member) {
    return (
      <button className={styles.member}>
        <div className={styles.memberImage}>
          <Skeleton width={48} height={48} borderRadius={0} />
        </div>
        <div className={styles.memberInfo}>
          <div>
            <Skeleton width={100} height={16} borderRadius={0} />
          </div>
          {/* <div>
            {member.DiscordUser.link.length != 0 && (
              <>
                {member.DiscordUser.link[0].isVerified && (
                  <div className={styles.label}>
                    <p>Verified</p>
                  </div>
                )}
              </>
            )}
          </div> */}
        </div>
      </button>
    );
  }

  return (
    <button
      className={`${styles.member} ${
        selectedMemberId == member.DiscordUser.discordId ? styles.selected : ""
      }`}
      onClick={() => setSelectedMemberId(member.DiscordUser.discordId)}
    >
      <div className={styles.memberImage}>
        {member.DiscordUser.avatar && (
          <img
            src={member.DiscordUser.avatar}
            alt={member.DiscordUser.username}
          />
        )}
        {member.DiscordUser.avatar == null && <VenetianMaskIcon size={24} />}
      </div>
      <div className={styles.memberInfo}>
        <div>
          <p>{member.DiscordUser.username}</p>
        </div>
        <div>
          {member.DiscordUser.link.length != 0 && (
            <>
              {member.DiscordUser.link[0].isVerified && (
                <div className={styles.label}>
                  <p>Verified</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </button>
  );
};

export const MemberView = ({
  memberId,
  guildId,
}: {
  memberId: string;
  guildId: string;
}) => {
  const member = useMember(memberId, guildId);

  useEffect(() => {
    console.log(member);
  }, [member]);

  if (!member) {
    return <p>Select a member to view</p>;
  }

  if (member.discordId != memberId) {
    return (
      <div className={styles.memberView}>
        <MemberOverview guildId={guildId} />

        {member.link.length == 0 && (
          <div className={styles.no}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <PenOffIcon size={16} />
              <h2>Not verified</h2>
            </div>
            <p>
              uowbo! can&apos;t interact with {member.username} as they
              aren&apos;t verified yet.
            </p>
            <p>
              You can instruct {member.username} to verify themselves in your
              server.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.memberView}>
      <MemberOverview member={member} guildId={guildId} />

      {member.link.length == 0 && (
        <div className={styles.no}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <PenOffIcon size={16} />
            <h2>Not verified</h2>
          </div>
          <p>
            uowbo! can&apos;t interact with {member.username} as they
            aren&apos;t verified yet.
          </p>
          <p>
            You can instruct {member.username} to verify themselves in your
            server.
          </p>
        </div>
      )}

      {member.link[0] && <ModerateList guildId={guildId} member={member} />}

      <ContactList member={member} />

      {member.guilds[0].messages.length != 0 && <MessageList member={member} />}
    </div>
  );
};
