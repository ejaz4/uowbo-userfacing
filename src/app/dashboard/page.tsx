"use client";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { Header } from "./_components/header";
import { useSearchParams } from "next/navigation";
import { useToken } from "./libs/useToken";
import { GuildChooser } from "./_components/chooseGuild";
import { MembersScreen } from "./_components/members";
import { useGuildSettings } from "./libs/useGuild";
import { Onboarding } from "./_components/onboarding";
import { LogsScreen } from "./_components/logs";
import { SetupScreen } from "./_components/setup";
import { useLogs } from "./libs/useLogs";
import { GuildLog } from "@prisma/client";

const Dashboard = () => {
  const token = useToken();
  const [guildId, setGuildId] = useState<string | null>(null);
  const [guildSettings, guildSettingsLoaded] = useGuildSettings(guildId);
  const [currentScreen, setCurrentScreen] = useState("members");
  const [isGuildSetup, setIsGuildSetup] = useState(false);
  const [logs, fetchNextLogs, finished] = useLogs(guildId) as [
    logs: GuildLog[],
    fetchNextLogs: () => void,
    finished: boolean
  ];

  return (
    <div className={styles.dashboard}>
      <Suspense>
        <div className={styles.content}>
          {guildSettings != null && (
            <Header
              guild={guildId}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
              setGuildId={setGuildId}
            />
          )}
          {token && (
            <>
              {!guildId && (
                <GuildChooser
                  setGuildId={setGuildId}
                  setIsGuildSetup={setIsGuildSetup}
                />
              )}
              {guildId && (
                <>
                  {guildSettings != null && (
                    <>
                      {currentScreen == "members" && (
                        <MembersScreen guildId={guildId} />
                      )}
                      {currentScreen == "logs" && (
                        <LogsScreen guildId={guildId} />
                      )}
                      {currentScreen == "setup" && (
                        <SetupScreen guildId={guildId} />
                      )}
                    </>
                  )}
                  {guildSettings == null && guildSettingsLoaded && (
                    <>
                      <Onboarding guildId={guildId} />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
