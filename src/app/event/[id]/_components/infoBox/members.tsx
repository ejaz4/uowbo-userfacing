"use client";
import moment from "moment";
import styles from "../../event.module.css";
import { useEffect, useState } from "react";
import { EventRole } from "@prisma/client";

export const MembersInfoBox = ({
  members,
}: {
  members: {
    username: string | undefined;
    avatar: string | undefined;
    role: EventRole;
  }[];
}) => {
  return (
    <div className={styles.infoBox} style={{ width: "100%" }}>
      <span className="label">Organiser</span>
      {members
        .filter((t) => t.role == "ORGANISER")
        .map((member, _) => {
          return (
            <div key={_}>
              <p>{member.username}</p>
            </div>
          );
        })}
    </div>
  );
};
