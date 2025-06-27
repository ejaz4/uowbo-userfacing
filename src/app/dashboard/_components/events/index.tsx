import { Button } from "@/app/_components/button/button";
import screenStyles from "./events.module.css";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { EventsWizard } from "./_components/wizard";
import { useEvents } from "../../libs/useEvents";
import { Event } from "@prisma/client";
import { EventCard } from "./_components/eventCard";

export const EventsScreen = ({ guildId }: { guildId: string }) => {
  const [creating, setCreating] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const events = useEvents(guildId);

  useEffect(() => {
    if (!events) return;

    const now = new Date();
    const upcoming = events.filter((event) => new Date(event.startTime) >= now);
    const past = events.filter((event) => new Date(event.startTime) < now);

    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, [events]);

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
        {upcomingEvents.length > 0 && (
          <div>
            <h1>Upcoming Events</h1>
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} guildId={guildId} />
            ))}
          </div>
        )}
        {!events && <p>No events found. Create one to get started!</p>}
      </div>

      {creating && <EventsWizard guildId={guildId} setPopup={setCreating} />}
    </>
  );
};
