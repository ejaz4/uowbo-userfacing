import React from "react";
import styles from "./memberList.module.css";
import { MemberInGuild } from "@/app/dashboard/libs/useMember";
import { GuildMessage } from "@prisma/client";

export const MessageList = ({ member }: { member: MemberInGuild }) => {
  return (
    <div className={styles.card}>
      <h2>Recent Messages</h2>
      <div className={styles.messageList}>
        {member.guilds[0] && (
          <>
            {member.guilds[0].messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

const Message = ({ message }: { message: GuildMessage }) => {
  const date = new Date(message.createdAt);
  const dateString = date.toLocaleString();
  return (
    <div className={styles.message}>
      <p>{message.message}</p>
      <p className={styles.messageMetadata}>{dateString}</p>
    </div>
  );
};
