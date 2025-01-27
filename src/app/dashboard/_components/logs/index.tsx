import { Button } from "@/app/_components/button/button";
import { Logs } from "./_components/logs";
import screenStyles from "./logs.module.css";
import { DownloadIcon, EyeIcon } from "lucide-react";

export const LogsScreen = ({ guildId }: { guildId: string }) => {
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
          <Button label={"Export logs"} image={<DownloadIcon size={16} />} />
        </div>
      </div>
      <Logs guildId={guildId} />
    </div>
  );
};
