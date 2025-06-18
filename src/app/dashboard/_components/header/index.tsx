import {
  CalendarDaysIcon,
  LogsIcon,
  Settings2Icon,
  UsersIcon,
} from "lucide-react";
import { HeaderButton } from "./_components/headerButton";
import styles from "./header.module.css";
import { ServerSwitcher } from "./_components/switcher";

export const Header = ({
  guild,
  currentScreen,
  setCurrentScreen,
  setGuildId,
}: {
  guild: string | null;
  currentScreen: string;
  setCurrentScreen: (currentScreen: string) => void;
  setGuildId: (guildId: string) => void;
}) => {
  return (
    <div className={styles.container}>
      {guild && (
        <>
          <div className={styles.buttonStrip}>
            <HeaderButton
              current={currentScreen}
              setCurrent={setCurrentScreen}
              value={"members"}
            >
              <UsersIcon size={16} />
              <p>Members</p>
            </HeaderButton>

            <HeaderButton
              current={currentScreen}
              setCurrent={setCurrentScreen}
              value={"events"}
            >
              <CalendarDaysIcon size={16} />
              <p>Events</p>
            </HeaderButton>

            <HeaderButton
              current={currentScreen}
              setCurrent={setCurrentScreen}
              value={"logs"}
            >
              <LogsIcon size={16} />
              <p>Logs</p>
            </HeaderButton>

            <HeaderButton
              current={currentScreen}
              setCurrent={setCurrentScreen}
              value={"setup"}
            >
              <Settings2Icon size={16} />
              <p>Setup</p>
            </HeaderButton>
          </div>

          <ServerSwitcher setGuildId={setGuildId} guildId={guild} />
        </>
      )}

      {!guild && (
        <div>
          <p>uowbo! auth</p>
        </div>
      )}
    </div>
  );
};
