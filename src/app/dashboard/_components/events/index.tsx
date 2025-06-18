import { Button } from "@/app/_components/button/button";
import screenStyles from "./events.module.css";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { EventsWizard } from "./_components/wizard";

export const EventsScreen = ({ guildId }: { guildId: string }) => {
  const [creating, setCreating] = useState(false);

  return (
    <>
      <div className={screenStyles.screen}>
        <div className={screenStyles.usableSection}>
          <h2>Events Hub</h2>
          <Button
            label={"Create new"}
            image={<PlusIcon size={16} />}
            onclick={() => setCreating(true)}
          />
        </div>
      </div>

      {creating && <EventsWizard />}
    </>
  );
};
