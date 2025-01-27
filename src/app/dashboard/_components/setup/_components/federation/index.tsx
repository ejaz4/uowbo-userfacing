import { GuildSettings } from "@prisma/client";
import { SettingCard } from "../card";
import cStyles from "../../setup.module.css";

export const FederationSection = ({
  settings,
  setSettings,
}: {
  settings: GuildSettings;
  setSettings: (settings: Partial<GuildSettings>) => void;
}) => {
  return (
    <>
      <h1>{settings.usesUowboNet ? "uowbo!net" : "Federation"}</h1>

      {!settings.usesUowboNet && (
        <>
          <SettingCard>
            <h2>What is federation?</h2>
            <p>
              Federation allows your server to moderate on users across all
              uowbo! communities.
            </p>
            <p>
              When you choose to federate, any authoritative actions you take on
              members are automatically shared to other communities.
            </p>
            <p>
              Likewise, authoritative actions taken on members in other servers
              will automatically apply in your server.
            </p>
          </SettingCard>

          <SettingCard>
            <h2>Relax your moderation</h2>
            <p>
              When you federate, you can relax the load on your moderation team
              as uowbo! will automatically take action on members who have been
              banned or muted in other communities for general rule violations
              to mitigate the risk of them causing trouble in your community.
            </p>
          </SettingCard>

          <SettingCard>
            <h2>Federation settings</h2>
            <p>The federation service in uowbo! is called uowbo!net.</p>
            <p>
              By activating uowbo!net, you agree to the federation code of
              conduct and fair usage policy.
            </p>

            <div className={cStyles.checkbox}>
              <input
                type="checkbox"
                name="uowboNet"
                id="uowboNet"
                checked={settings.usesUowboNet}
                // defaultChecked={settings.allowsEmailEntry}
                onChange={(e) => {
                  setSettings({
                    usesUowboNet: e.target.checked,
                  });
                }}
              />
              <label htmlFor="uowboNet">Use uowbo!net</label>
            </div>
          </SettingCard>
        </>
      )}

      {settings.usesUowboNet && (
        <>
          <SettingCard>
            <h2>Federation is on</h2>
            <p>Connected to uowbo!net</p>
          </SettingCard>
          <SettingCard>
            <h2>Submissions</h2>
            <p>
              When striking a member, tick "Also federate strike" to submit it
              to uowbo!net.
            </p>
            <p>
              When your submission is accepted, it is federated across other
              communities.
            </p>
            <p>
              Your submission may not always be accepted, but will always apply
              in your own server.
            </p>
          </SettingCard>
          <SettingCard>
            <div className={cStyles.checkbox}>
              <input
                type="checkbox"
                name="uowboNet"
                id="uowboNet"
                checked={settings.usesUowboNet}
                // defaultChecked={settings.allowsEmailEntry}
                onChange={(e) => {
                  setSettings({
                    usesUowboNet: e.target.checked,
                  });
                }}
              />
              <label htmlFor="uowboNet">Use uowbo!net</label>
            </div>
          </SettingCard>
        </>
      )}
    </>
  );
};
