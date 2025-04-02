import { Button } from "@/app/_components/button/button";
import { Logs } from "./_components/logs";
import screenStyles from "./logs.module.css";
import { DownloadIcon, EyeIcon } from "lucide-react";
import { GuildLog } from "@prisma/client";
import { useState } from "react";
import { ExportLogsDialogue } from "./_components/exportLogs";

export const LogsScreen = ({
  guildId,
  exportedLogs,
  exportedFetchNewLogs,
}: {
  guildId: string;
  exportedLogs: GuildLog[];
  exportedFetchNewLogs: () => void;
}) => {
  const [showExportDialogue, setShowExportDialogue] = useState(false);

  return (
    <div className={screenStyles.screen}>
      <div className={screenStyles.usableSection}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 8,
          }}
        >
          <EyeIcon style={{ color: "rgba(0,0,0,0.5)" }} size={16} />
          <p>Visible to moderators and the server owner</p>
        </div>
        <div className={screenStyles.buttonStrips}>
          <p>All logs</p>
          <Button
            label={"Export logs"}
            onclick={() => setShowExportDialogue(true)}
            image={<DownloadIcon size={16} />}
          />
        </div>
      </div>
      <Logs guildId={guildId} />
      {showExportDialogue && (
        <ExportLogsDialogue
          setShowDialogue={setShowExportDialogue}
          guildId={guildId}
          exportedLogs={exportedLogs}
          exportedFetchNewLogs={exportedFetchNewLogs}
        />
      )}
    </div>
  );
};
