import { GuildLog } from "@prisma/client";
import React from "react";
import styles from "./exportLogs.module.css";

export const ExportLogsDialogue = ({
  guildId,
  exportedLogs,
  exportedFetchNewLogs,
  setShowDialogue,
}: {
  guildId: string;
  exportedLogs: GuildLog[];
  exportedFetchNewLogs: () => void;
  setShowDialogue: (state: boolean) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Export logs</h2>
        <p>Export your logs to HTML, XML or JSON for further analysis.</p>
        <p>
          Your logs are prepared on-device and leaving the uowbo! dashboard will
          cancel generation of your report.
        </p>

        <p>File type</p>
        <select name="fileType" id="fileType">
          <option value="html">HTML</option>
          <option value="xml">XML</option>
          <option value="json">JSON</option>
          <option value="csv">CSV</option>
        </select>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 4 }}>
          <button onClick={() => setShowDialogue(false)}>Cancel</button>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
};
