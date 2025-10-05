"use client";
import { useToken } from "@/app/dashboard/libs/useToken";
import { Button } from "../button/button";
import { useMe } from "@/app/event/[id]/libs/useMe";
import { useEffect } from "react";
import styles from "./header.module.css";
import { Skeleton } from "../skeleton/skeleton";

export const HeaderProfileDisplay = () => {
  const token = useToken();
  const me = useMe(token);

  useEffect(() => {
    if (!me) return;

    console.log(me);
  }, [me]);

  if (!token) {
    return <></>;
  }

  if (!me.data) {
    return (
      <button className={styles.button}>
        <Skeleton width={32} height={32} />
        <Skeleton width={80} height={16} animation={false} />
      </button>
    );
  }

  return (
    <button className={styles.button}>
      {me.data.avatar && (
        <img
          className={styles.avatar}
          src={me.data.avatar}
          alt={me.data.username}
        />
      )}

      <p>{me.data.username}</p>
    </button>
  );
};
