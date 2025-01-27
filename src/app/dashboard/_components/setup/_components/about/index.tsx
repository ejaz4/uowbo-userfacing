import { SettingCard } from "../card";
import React from "react";

export const AboutSection = () => {
  const version = "2.0";
  const isBeta = true;

  return (
    <>
      <h1>About</h1>
      <SettingCard>
        <h2>uowbo!</h2>
        <p>
          Version {version} {isBeta ? "🅱" : ""}
        </p>
      </SettingCard>

      <SettingCard>
        <h2>Preview disclaimer</h2>
        <p>
          This is a pre-release version of uowbo! which is still in testing.
        </p>
        <p>You will experience bugs and problems - this should be reported.</p>
      </SettingCard>
      <p>
        <a href="https://discord.gg/Uw6Zw476Na" target="_BLANK">
          Discord
        </a>{" "}
        •{" "}
        <a href="https://github.com/ejaz4/uowbo" target="_BLANK">
          GitHub
        </a>{" "}
        •{" "}
        <a href="/privacy" target="_BLANK">
          Privacy
        </a>
      </p>
    </>
  );
};
