import styles from "./guildHeader.module.css";

export const GuildHeader = ({
  icon,
  name,
}: {
  icon: string | null;
  name: string;
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.guildIdentity}>
        {icon && (
          <div className={styles.guildIcon}>
            <img src={icon} alt="" />
          </div>
        )}
        <p>{name}</p>
      </div>
    </div>
  );
};
