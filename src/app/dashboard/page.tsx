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
import popup from "@/app/dashboard/popups.module.css";
import { useLogs } from "./libs/useLogs";
import { GuildLog } from "@prisma/client";
import { EventsScreen } from "./_components/events";
import { DiscordDisplay } from "../_components/profileDisplay/discord";
import { useCachedMe } from "./libs/useMe";

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
  const cachedMe = useCachedMe();

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
                      {currentScreen == "events" && (
                        <EventsScreen guildId={guildId} />
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

          {!token && (
            <div className={popup.container}>
              {!cachedMe && (
                <div className={popup.card}>
                  <h2>Keyless Authentication</h2>
                  <p>To login to the dashboard:</p>
                  <ol>
                    <li>Go to any Discord server with uowbo! verify</li>
                    <li>
                      Run <code>/dashboard</code>
                    </li>
                    <li>Click the magic link</li>
                  </ol>
                </div>
              )}
              {cachedMe && (
                <div className={popup.card}>
                  <h2>Log in again</h2>
                  <p>We couldn&apos;t access your account at the moment.</p>
                  <DiscordDisplay
                    username={cachedMe.username || "Discord user"}
                    avatarUrl={cachedMe.avatar || ""}
                    verified={true}
                    withSwitcher={false}
                  />
                  <p>Log in again to the dashboard:</p>
                  <ol>
                    <li>Go to any Discord server with uowbo! verify</li>
                    <li>
                      Run <code>/dashboard</code>
                    </li>
                    <li>Click the magic link</li>
                  </ol>
                </div>
              )}
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
