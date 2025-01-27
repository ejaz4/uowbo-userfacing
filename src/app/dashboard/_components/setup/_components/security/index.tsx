import { GuildSettings } from "@prisma/client";
import { SettingCard } from "../card";
import cStyles from "../../setup.module.css";

export const SecuritySection = ({
  settings,
  setSettings,
  roles,
}: {
  settings: GuildSettings;
  setSettings: (settings: Partial<GuildSettings>) => void;
  roles: {
    id: string;
    name: string;
    color: string;
  }[];
}) => {
  return (
    <>
      <h1>Security</h1>
      <SettingCard>
        <h2>Your account</h2>
        <p>
          Keyless authentication is protecting your account. This means that
          your uowbo! account has the same protections as your Discord account.
        </p>
        <p>
          To log in somewhere else, use <code>/dashboard</code> in any server
          where uowbo! is present.
        </p>
      </SettingCard>
      <SettingCard>
        <h2>Verification methods</h2>
        <p>
          Members in your server have the following verification methods
          available to them.
        </p>
        <div className={cStyles.checkbox}>
          <input
            type="checkbox"
            name="emailVerification"
            id="emailVerification"
            checked={settings.allowsEmailEntry}
            // defaultChecked={settings.allowsEmailEntry}
            onChange={(e) => {
              setSettings({
                allowsEmailEntry: e.target.checked,
              });
            }}
          />
          <label htmlFor="emailVerification">University email address</label>
        </div>
        <div className={cStyles.checkbox}>
          <input
            type="checkbox"
            name="biometricEntry"
            id="biometricEntry"
            // checked={settings.allowsBiometricEntry}
            checked={settings.allowsBiometricEntry}
            onChange={(e) => {
              setSettings({
                allowsBiometricEntry: e.currentTarget.checked,
              });
            }}
          />
          <label htmlFor="biometricEntry">University card</label>
        </div>

        <p>After verification, give the member the following role:</p>
        <select
          defaultValue={
            roles.find((role) => settings.verifiedRoleId == role.id)?.id
          }
          onChange={(e) => {
            setSettings({
              verifiedRoleId: e.target.value,
            });
          }}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </SettingCard>
      <SettingCard>
        <h2>Moderators</h2>
        <p>
          Your moderators are people who you trust to help you manage your
          server. They can access the dashboard to strike and pardon members on
          your behalf.
        </p>
        <p>Tell uowbo! what role your moderators will have:</p>
        <select
          defaultValue={
            roles.find((role) => settings.moderatorRoleId == role.id)?.id
          }
          onChange={(e) => {
            setSettings({
              moderatorRoleId: e.target.value,
            });
          }}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </SettingCard>
    </>
  );
};
