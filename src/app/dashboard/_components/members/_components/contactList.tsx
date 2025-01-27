import { MemberInGuild } from "@/app/dashboard/libs/useMember";
import React from "react";
import styles from "./memberList.module.css";

export const ContactList = ({ member }: { member: MemberInGuild }) => {
  return (
    <div className={styles.card}>
      <h2>Contact</h2>
      <div className={styles.horizList}>
        {member.link.length > 0 && (
          <>
            {member.link[0].emailVerification?.email && (
              <a href={`mailto:${member.link[0].emailVerification.email}`}>
                <button>
                  <p>Email address</p>
                </button>
              </a>
            )}
          </>
        )}
        <a
          href={`https://discordapp.com/users/${member.discordId}`}
          target="_BLANK"
        >
          <button>
            <p>Discord</p>
          </button>
        </a>
      </div>
    </div>
  );
};
