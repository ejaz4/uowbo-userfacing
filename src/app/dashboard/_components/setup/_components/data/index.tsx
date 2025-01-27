import { SettingCard } from "../card";
import cStyles from "../../setup.module.css";
import { useToken } from "@/app/dashboard/libs/useToken";
import { useGuild } from "@/app/dashboard/libs/useGuild";
import { useModGuilds } from "@/app/dashboard/libs/useModGuilds";

export const DataSection = ({ guildId }: { guildId: string }) => {
  const token = useToken();
  const guild = useGuild(guildId);

  return (
    <>
      <h1>uowbo! and me</h1>
      <SettingCard>
        {guild && (
          <>
            <h2>Your server</h2>
            <p>Name: {guild.guildName}</p>
            <p>ID: {guild.guildId}+DISCORD</p>
          </>
        )}
      </SettingCard>
      <SettingCard>
        <h2>API privacy</h2>
        <p>
          uowbo! safeguards APIs to ensure that data from your server cannot be
          extracted or scraped by third-parties.
        </p>
      </SettingCard>
      <SettingCard>
        <h2>Your data</h2>
        <p>
          During the trial, data enquires can only be requested through email:{" "}
          <a href="mailto:tellus@ceccun.com">tellus@ceccun.com</a>
        </p>
        <p>
          In your email, you can choose to request data about your account, your
          server or both.
        </p>
        <p>
          You can also request to delete your whole account - this may have some
          complications, but we will let you know on a case-by-case basis.{" "}
        </p>
        <p>Please mention the technical details above.</p>
        <p>Data exports take a few days to prepare.</p>
      </SettingCard>
    </>
  );
};
