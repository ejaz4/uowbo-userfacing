import { Member, useMembers } from "@/app/dashboard/libs/useMembers";
import { MemberInList } from "./member";
import styles from "./memberList.module.css";
import { useState } from "react";

export const MemberList = ({
  members,
  selectedMemberId,
  setSelectedMemberId,
}: {
  members: Member[];
  selectedMemberId: string;
  setSelectedMemberId: (memberId: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.list}>
      <input
        type={"search"}
        placeholder={"Filter"}
        onKeyUp={(e) => {
          setSearchQuery((e.target as HTMLInputElement).value);
        }}
      />

      {members.length == 0 &&
        [...Array(5)].map((_, i) => (
          <MemberInList
            key={i}
            selectedMemberId={selectedMemberId}
            setSelectedMemberId={setSelectedMemberId}
          />
        ))}

      {members.map((member) => {
        if (searchQuery.length > 0) {
          if (
            member.DiscordUser.username
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            member.DiscordUser.discordId.includes(searchQuery)
          ) {
            return (
              <MemberInList
                member={member}
                key={member.DiscordUser.discordId}
                selectedMemberId={selectedMemberId}
                setSelectedMemberId={setSelectedMemberId}
              />
            );
          }
          return null;
        }

        return (
          <MemberInList
            member={member}
            key={member.DiscordUser.discordId}
            selectedMemberId={selectedMemberId}
            setSelectedMemberId={setSelectedMemberId}
          />
        );
      })}
    </div>
  );
};
