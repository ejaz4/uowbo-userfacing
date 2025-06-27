import Image from "next/image";
import styles from "./discord.module.css";
import Link from "next/link";
import { Skeleton } from "../skeleton/skeleton";

export const DiscordDisplay = ({
  username,
  avatarUrl,
  verified,
  withSwitcher = true,
}: {
  username: string;
  avatarUrl: string;
  verified: boolean;
  withSwitcher?: boolean;
}) => {
  return (
    <div className={styles.container}>
      {avatarUrl && (
        <img width={64} height={64} src={avatarUrl} alt="Discord avatar" />
      )}
      {!avatarUrl && <Skeleton width={64} height={64} borderRadius={4} />}
      <div className={styles.right}>
        <h2>{username || <Skeleton width={100} height={16} />}</h2>
        {username && withSwitcher && (
          <Link className={styles.a} href={"/verify/discord"}>
            Not {username}?
          </Link>
        )}
        {!username && <Skeleton width={120} height={12} />}
      </div>
    </div>
  );
};
