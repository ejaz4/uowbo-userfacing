import { Button } from "@/app/_components/button/button";
import { useGuild, useGuildSettings } from "../../libs/useGuild";
import styles from "./onboarding.module.css";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useRoles } from "../../libs/useRoles";

export const Onboarding = ({ guildId }: { guildId: string }) => {
  const guild = useGuild(guildId);
  const roles = useRoles(guildId);
  const [settings, settingsLoaded, setSettings] = useGuildSettings(guildId);
  const [step, setStep] = useState(0);
  const [allowsEmailEntry, setAllowsEmailEntry] = useState(true);
  const [allowsBiometricEntry, setAllowsBiometricEntry] = useState(true);
  const [moderatorRole, setModeratorRole] = useState("");
  const [verifiedRole, setVerifiedRole] = useState("");
  const [usesUowboNet, setUsesUowboNet] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const saveSettings = async () => {
    if (submitting) return;
    setSubmitting(true);

    if (typeof setSettings === "function") {
      await setSettings({
        allowsEmailEntry,
        allowsBiometricEntry,
        moderatorRoleId: moderatorRole,
        verifiedRoleId: verifiedRole,
        usesUowboNet: usesUowboNet,
      });
      setStep(step + 1);
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {step == 0 && (
          <div className={styles.cardScreen}>
            <h2>Proud to see you here, {guild?.guildName}</h2>
            <p>
              uowbo! is a valving system for University of Westminster students.
            </p>
            <p>
              When you use uowbo!, you know your members are who they say they
              really are.
            </p>

            <p>
              uowbo! supports a range of ways for your members to prove their
              identity, while also letting externals still get in on the action.
            </p>

            <div className={styles.buttonStrip}>
              <div></div>
              <Button
                onclick={() => setStep(1)}
                label="Next"
                image={<ChevronRight size={16} />}
                direction={"rtl"}
              />
            </div>
          </div>
        )}

        {step == 1 && (
          <div className={styles.cardScreen}>
            <h2>{guild?.guildName}, protected with keyless authentication</h2>
            <p>
              Access to your server dashboard uses keyless authentication for
              you and the rest of your moderation team.
            </p>
            <p>
              With keyless authentication, you can use <code>/dashboard</code>{" "}
              in any channel in any server to get a quick link to log in to your
              dashboard.
            </p>

            <div className={styles.buttonStrip}>
              <Button
                onclick={() => setStep(step - 1)}
                label="Back"
                direction={"rtl"}
              />
              <Button
                onclick={() => setStep(step + 1)}
                label="Sounds good"
                image={<ChevronRight size={16} />}
                direction={"rtl"}
              />
            </div>
          </div>
        )}

        {step == 2 && (
          <div className={styles.cardScreen}>
            <h2>How should verification work?</h2>
            <p>
              Choose the verification methods you want your users to be able to
              use.
            </p>
            <p>
              We recommend keeping them all on but if you have strict
              requirements to adhere to, you can change them here.
            </p>

            <div>
              <div>
                <input
                  type="checkbox"
                  id="emailVerification"
                  name="emailVerification"
                  defaultChecked={allowsEmailEntry}
                  onChange={(e) => setAllowsEmailEntry(e.currentTarget.checked)}
                />
                <label htmlFor="emailVerification">
                  Using their university email
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="biometricVerification"
                  name="biometricVerification"
                  defaultChecked={allowsBiometricEntry}
                  onChange={(e) =>
                    setAllowsBiometricEntry(e.currentTarget.checked)
                  }
                />
                <label htmlFor="biometricVerification">
                  Scanning their university ID card
                </label>
              </div>
            </div>

            <div className={styles.buttonStrip}>
              <Button
                onclick={() => setStep(step - 1)}
                label="Back"
                direction={"rtl"}
              />
              <Button
                onclick={() => setStep(step + 1)}
                label="Sounds good"
                image={<ChevronRight size={16} />}
                direction={"rtl"}
              />
            </div>
          </div>
        )}

        {step == 3 && (
          <div className={styles.cardScreen}>
            <h2>Who are your moderators?</h2>
            <p>
              Pick the role that all your moderators have. They will all have
              access to their own personal dashboard and will gain the ability
              to strike or pardon members.
            </p>
            <select
              onChange={(e) => {
                setModeratorRole(e.currentTarget.value);
              }}
              defaultValue={roles.find((role) => moderatorRole == role.id)?.id}
            >
              {roles.map((role) => (
                <option
                  value={role.id}
                  style={{ color: role.color }}
                  key={role.id}
                >
                  {role.name}
                </option>
              ))}
            </select>

            {roles.find((role) => role.id == moderatorRole)?.name ==
              "@everyone" && (
              <p>
                Granting moderator role to @everyone is extremely dangerous as
                it allows anyone in your server to carry out moderation actions
                on anyone.
              </p>
            )}
            <p>
              P.S: you will always be the owner until you transfer ownership to
              someone else.
            </p>

            <div className={styles.buttonStrip}>
              <Button
                onclick={() => setStep(step - 1)}
                label="Back"
                direction={"rtl"}
              />
              <Button
                onclick={() => setStep(step + 1)}
                label="Done"
                image={<ChevronRight size={16} />}
                direction={"rtl"}
              />
            </div>
          </div>
        )}

        {step == 4 && (
          <div className={styles.cardScreen}>
            <h2>What role do verified members get?</h2>
            <p>
              Pick the role that your verified members will get. They will be
              handed out automatically when users verify themselves.
            </p>
            <select
              onChange={(e) => {
                setVerifiedRole(e.currentTarget.value);
              }}
              defaultValue={roles.find((role) => verifiedRole == role.id)?.id}
            >
              {roles.map((role) => (
                <option
                  value={role.id}
                  style={{ color: role.color }}
                  key={role.id}
                >
                  {role.name}
                </option>
              ))}
            </select>

            {roles.find((role) => role.id == verifiedRole)?.name ==
              "@everyone" && (
              <p>
                Granting verified role to @everyone is extremely dangerous and
                defeats the purpose of uowbo!.
              </p>
            )}

            <div className={styles.buttonStrip}>
              <Button
                onclick={() => setStep(step - 1)}
                label="Back"
                direction={"rtl"}
              />
              <Button
                onclick={() => setStep(step + 1)}
                label="Done"
                image={<ChevronRight size={16} />}
                direction={"rtl"}
              />
            </div>
          </div>
        )}

        {step == 5 && (
          <div className={styles.cardScreen}>
            <h2>Use uowbo!net?</h2>
            <p>
              uowbo!net is an automatic action system that can strike and
              restrict members quickly based on how they act in other servers.
            </p>

            <p>
              This is useful for when you have a large community - as uowbo!
              will automatically mute members who may target your community
              next.
            </p>
            <p>
              When you or your moderation team strike, pardon or take action on
              a member, they will be added to the uowbo!net database.
            </p>
            <div>
              <input
                type="checkbox"
                name="uowbonet"
                id="uowbonet"
                defaultChecked={usesUowboNet}
                onChange={(e) => setUsesUowboNet(e.currentTarget.checked)}
              />
              <label htmlFor="uowbonet">Use uowbo!net</label>
            </div>
            <p>
              Keeping uowbo!net turned on will reduce the load on your
              moderation team.
            </p>

            <div className={styles.buttonStrip}>
              <Button
                onclick={() => setStep(step - 1)}
                label="Back"
                direction={"rtl"}
              />
              <Button
                onclick={() => saveSettings()}
                label="Continue"
                loading={submitting}
                image={<ChevronRight size={16} />}
                direction={"rtl"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
