import { Skeleton } from "@/app/_components/skeleton/skeleton";
import styles from "./chooseGuild.module.css";

export const GuildInChooser = ({
  name,
  id,
  icon,
  isOwner,
  isMod,
  setGuildId,
  skeleton,
}: {
  name: string;
  id: string;
  icon: string;
  isOwner: boolean;
  isMod: boolean;
  setGuildId: (guildId: string) => void;
  skeleton?: boolean;
}) => {
  const roleText =
    isOwner && isMod
      ? "Owner and Moderator"
      : isOwner
      ? "Owner"
      : isMod
      ? "Moderator"
      : "Member";

  if (skeleton) {
    return (
      <button className={`${styles.guild} ${styles.unselectable}`}>
        <Skeleton width={48} height={48} borderRadius={4} />
        <div className={styles.guildInfo}>
          <Skeleton width={100} height={16} borderRadius={4} />
          <Skeleton width={80} height={12} borderRadius={2} />
        </div>
      </button>
    );
  }

  return (
    <button onClick={() => setGuildId(id)} className={styles.guild}>
      {icon && <img src={icon} alt={name} />}
      {!icon && (
        <div className={styles.nameIcon}>
          <p>{name}</p>
        </div>
      )}
      <div className={styles.guildInfo}>
        <h2>{name}</h2>
        <p>{roleText}</p>
      </div>
    </button>
  );
};
