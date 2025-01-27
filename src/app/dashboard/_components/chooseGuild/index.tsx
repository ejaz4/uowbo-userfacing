import { useModGuilds } from "../../libs/useModGuilds";
import { useToken } from "../../libs/useToken";
import styles from "./chooseGuild.module.css";
import { GuildInChooser } from "./guild";

export const GuildChooser = ({
  setGuildId,
  setIsGuildSetup,
}: {
  setGuildId: (guildId: string) => void;
  setIsGuildSetup: (isGuildSetup: boolean) => void;
}) => {
  const token = useToken();
  const guilds = useModGuilds();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Choose a server</h2>
        <p>
          To continue, choose a server you&apos;re a moderator or administrator
          in.
        </p>

        <div className={styles.guilds}>
          {guilds.length == 0 && (
            <>
              {[...Array(2)].map((item, _) => (
                <GuildInChooser
                  setGuildId={setGuildId}
                  key={_}
                  id={""}
                  name={""}
                  icon={""}
                  isOwner={false}
                  isMod={false}
                  skeleton={true}
                />
              ))}
            </>
          )}
          {guilds.map((guild) => {
            return (
              <GuildInChooser
                setGuildId={setGuildId}
                key={guild.Guilds.guildId}
                id={guild.Guilds.guildId}
                name={guild.Guilds.guildName}
                icon={guild.Guilds.guildIcon}
                isOwner={guild.isOwner}
                isMod={guild.isMod}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
