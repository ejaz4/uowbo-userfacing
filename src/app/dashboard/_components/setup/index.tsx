import { useState } from "react";
import { useGuildSettings } from "../../libs/useGuild";
import styles from "./setup.module.css";
import { Button } from "@/app/_components/button/button";
import {
  HandshakeIcon,
  InfoIcon,
  LockIcon,
  SatelliteDishIcon,
} from "lucide-react";
import { SecuritySection } from "./_components/security";
import { GuildSettings } from "@prisma/client";
import { useRoles } from "../../libs/useRoles";
import { FederationSection } from "./_components/federation";
import { DataSection } from "@/app/dashboard/_components/setup/_components/data";
import { AboutSection } from "./_components/about";
import { useMe } from "../../libs/useMe";

export const SetupScreen = ({ guildId }: { guildId: string }) => {
  const [settings, loaded, setSettings] = useGuildSettings(guildId) as [
    settings: GuildSettings | null,
    loaded: boolean,
    setSettings: (settings: Partial<GuildSettings>) => void
  ];
  const roles = useRoles(guildId);
  const [currentScreen, setCurrentScreen] = useState("security");
  const me = useMe(guildId);

  return (
    <>
      {me && (
        <>
          {me.isMod && (
            <div className={styles.bannerOuter}>
              <div className={styles.warningBanner}>
                <h2>Read-only</h2>
                <p>Only the owner can change settings about the server.</p>
              </div>
            </div>
          )}
        </>
      )}
      <div className={styles.screen}>
        <div className={styles.list}>
          <NavigationButton
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            value="security"
          >
            <LockIcon size={16} />
            <p>Security</p>
          </NavigationButton>
          <NavigationButton
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            value="federation"
          >
            <SatelliteDishIcon size={16} />
            <p>{settings?.usesUowboNet ? "uowbo!net" : "Federation"}</p>
          </NavigationButton>
          <NavigationButton
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            value="data"
          >
            <HandshakeIcon size={16} />
            <p>uowbo! and me</p>
          </NavigationButton>
          <NavigationButton
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            value="about"
          >
            <InfoIcon size={16} />
            <p>About uowbo!</p>
          </NavigationButton>

          <div className={styles.listFooter}>
            <p>Made with ❤️ by Ejaz</p>
            <p>
              <a href="https://github.com/ejaz4/uowbo">Source</a>
            </p>
          </div>
        </div>
        {settings != null && (
          <div className={styles.settings}>
            {currentScreen === "security" && (
              <SecuritySection
                settings={settings}
                setSettings={setSettings}
                roles={roles}
              />
            )}

            {currentScreen === "federation" && (
              <FederationSection
                settings={settings}
                setSettings={setSettings}
              />
            )}

            {currentScreen === "data" && <DataSection guildId={guildId} />}

            {currentScreen === "about" && <AboutSection />}
          </div>
        )}
      </div>
    </>
  );
};

const NavigationButton = ({
  currentScreen,
  setCurrentScreen,
  value,
  children,
}: {
  currentScreen: string;
  setCurrentScreen: (currentScreen: string) => void;
  value: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={currentScreen === value ? styles.active : ""}
      onClick={() => {
        setCurrentScreen(value);
      }}
    >
      {children}
    </button>
  );
};
