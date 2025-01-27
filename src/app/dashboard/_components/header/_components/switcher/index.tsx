import { useGuild } from "@/app/dashboard/libs/useGuild";
import styles from "./switcher.module.css";

export const ServerSwitcher = ({
  guildId,
  setGuildId,
}: {
  guildId: string;
  setGuildId: (id: string) => void;
}) => {
  const guildInfo = useGuild(guildId);

  return (
    <button
      className={styles.switcher}
      onClick={() => {
        setGuildId("");
      }}
    >
      {guildInfo?.guildIcon && (
        <div>
          <img src={guildInfo?.guildIcon} />
        </div>
      )}
      <div>
        <p>{guildInfo?.guildName}</p>
      </div>
    </button>
  );
};
