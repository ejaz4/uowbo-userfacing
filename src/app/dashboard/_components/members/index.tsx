import { useState } from "react";
import { useMembers } from "../../libs/useMembers";
import { MemberList } from "./_components/memberList";
import styles from "./members.module.css";
import { MemberView } from "./_components/member";

export const MembersScreen = ({ guildId }: { guildId: string }) => {
  const members = useMembers(guildId);
  const [selectedMemberId, setSelectedMemberId] = useState("");

  return (
    <div className={styles.screen}>
      <div className={styles.list}>
        {members && (
          <MemberList
            members={members}
            selectedMemberId={selectedMemberId}
            setSelectedMemberId={setSelectedMemberId}
          />
        )}
      </div>
      <MemberView memberId={selectedMemberId} guildId={guildId} />
    </div>
  );
};
