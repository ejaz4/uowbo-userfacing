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
  const [eventsHappeningNow, setEventsHappeningNow] = useState<Event[]>([]);
  const [now, setNow] = useState<Date>(new Date());
  const events = useEvents(guildId);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!events) return;

    const upcoming = events.filter((event) => new Date(event.startTime) >= now);
    const past = events.filter((event) => new Date(event.endTime) < now);
    const happeningNow = events.filter(
      (event) =>
        new Date(event.startTime) <= now && new Date(event.endTime) >= now
    );

    setEventsHappeningNow(happeningNow);
    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, [events, now]);

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

        <div className={screenStyles.eventList}>
          {eventsHappeningNow.length > 0 && (
            <>
              <h2>Happening Now</h2>
              <div className={screenStyles.grid}>
                {eventsHappeningNow.map((event) => (
                  <EventCard key={event.id} event={event} guildId={guildId} />
                ))}
              </div>
            </>
          )}

          {upcomingEvents.length > 0 && (
            <>
              <h2>Upcoming</h2>
              <div className={screenStyles.grid}>
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} guildId={guildId} />
                ))}
              </div>
            </>
          )}

          {pastEvents.length > 0 && (
            <>
              <h2>Previous</h2>
              <div className={screenStyles.grid}>
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} guildId={guildId} />
                ))}
              </div>
            </>
          )}

          {!events && <p>No events found. Create one to get started!</p>}
        </div>
      </div>

      {creating && <EventsWizard guildId={guildId} setPopup={setCreating} />}
    </>
  );
};
