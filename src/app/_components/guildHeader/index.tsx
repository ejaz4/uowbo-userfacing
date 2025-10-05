import { useToken } from "@/app/dashboard/libs/useToken";
import styles from "./guildHeader.module.css";
import { HeaderProfileDisplay } from "../profileDisplay/header";

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

      <HeaderProfileDisplay />
    </div>
  );
};
