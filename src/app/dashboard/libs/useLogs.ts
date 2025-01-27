import { GuildLog } from "@prisma/client";
import { useEffect, useState } from "react";
import { useToken } from "./useToken";

export const useLogs = (guildId: string | null) => {
  const [logs, setLogs] = useState<GuildLog[]>([]);
  const [logNumber, setLogNumber] = useState(0);
  const [finishedLogs, setFinishedLogs] = useState(0);
  const [finished, setFinished] = useState(false);
  const token = useToken();

  const fetchNextLogs = async () => {
    setLogNumber(finishedLogs + 1);
  };

  useEffect(() => {
    if (!token) return;
    if (!guildId) return;
    if (finishedLogs == logNumber) return;
    // if (logNumber === 0) return;

    fetch(
      `/api/dashboard/${guildId}/logs${
        logs.length != 0 ? `?lastLog=${logs[logs.length - 1].id}` : ""
      }`,
      {
        headers: {
          Authorization: token as string,
        },
      }
    ).then(async (res) => {
      if (res.status === 200) {
        const newLogs = await res.json();

        if (newLogs.length === 0) {
          setFinished(true);
          return;
        }
        setFinishedLogs(logNumber + 1);
        setLogs([...logs, ...newLogs]);
      }
    });
  }, [guildId, logNumber, token]);

  return [logs, fetchNextLogs, finished];
};
