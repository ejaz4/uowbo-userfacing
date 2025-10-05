"use client";
import moment from "moment";
import styles from "../../event.module.css";
import { useEffect, useState } from "react";
import { EventRole } from "@prisma/client";
import memberStyles from "./members.module.css";

export const MembersInfoBox = ({
  members,
}: {
  members: {
    username: string | undefined;
    avatar: string | undefined;
    role: EventRole;
  }[];
}) => {
  const organisers = members.filter((t) => t.role == "ORGANISER");
  const hosts = members.filter((t) => t.role == "HOST");

  return (
    <div className={styles.infoBox}>
      {organisers.length != 0 && (
        <>
          <span className="label">
            Organiser{organisers.length > 1 ? "s" : ""}
          </span>
          {organisers.map((member, _) => {
            return (
              <div className={memberStyles.member} key={_}>
                <img src={member.avatar} alt="" />
                <p>{member.username}</p>
              </div>
            );
          })}
        </>
      )}
      {hosts.length != 0 && (
        <>
          <span className="label">Host{hosts.length > 1 ? "s" : ""}</span>
          {hosts.map((member, _) => {
            return (
              <div className={memberStyles.member} key={_}>
                <img src={member.avatar} alt="" />
                <p>{member.username}</p>
              </div>
            );
          })}
        </>
      )}{" "}
    </div>
  );
};
