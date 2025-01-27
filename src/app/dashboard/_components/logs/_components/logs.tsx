import { useLogs } from "@/app/dashboard/libs/useLogs";
import { GuildLog } from "@prisma/client";
import React, { useEffect, useRef } from "react";
import styles from "../logs.module.css";
import { Skeleton } from "@/app/_components/skeleton/skeleton";

export const Logs = ({ guildId }: { guildId: string }) => {
  const [logs, nextLogs, finished] = useLogs(guildId) as [
    GuildLog[],
    () => void,
    boolean
  ];
  const listRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!listRef.current) return;
    if (
      listRef.current.scrollTop + listRef.current.clientHeight >=
      listRef.current.scrollHeight
    ) {
      nextLogs();
    }
  };

  useEffect(() => {
    handleScroll();
  }, [logs]);

  return (
    <div
      ref={listRef}
      onScroll={(e) => {
        handleScroll();
      }}
      className={styles.list}
    >
      {logs.map((log: GuildLog) => (
        <div className={styles.log} key={log.id}>
          <p>{log.message}</p>
          <p>{new Date(log.createdAt).toLocaleString()}</p>
        </div>
      ))}
      {!finished && (
        <>
          <div className={styles.log}>
            <Skeleton width={200} height={16} />
            <Skeleton width={40} height={16} />
          </div>
          <button
            onClick={() => {
              nextLogs();
            }}
          >
            Show more
          </button>
        </>
      )}
    </div>
  );
};
