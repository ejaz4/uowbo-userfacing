import { Event } from "@prisma/client";
import { useEffect, useState } from "react";

export const EventCard = ({
  event,
  guildId,
}: {
  event: Event;
  guildId: string;
}) => {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    // If the startTime is more than a week in the future, display the date and time - otherwise use moment.js to format it and display it relative to the current time.
    const now = new Date();
    const start = new Date(event.startTime);
    const end = new Date(event.endTime);

    if (start.getTime() > now.getTime() + 604800000) {
      setTimeString(
        `${start.toLocaleDateString()} ${start.toLocaleTimeString()}`
      );
    } else {
      const timeDiff = start.getTime() - now.getTime();
      const minutes = Math.floor(timeDiff / 60000);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        setTimeString(`Starts in ${days} day${days > 1 ? "s" : ""}`);
      } else if (hours > 0) {
        setTimeString(`Starts in ${hours} hour${hours > 1 ? "s" : ""}`);
      } else {
        setTimeString(`Starts in ${minutes} minute${minutes > 1 ? "s" : ""}`);
      }
    }
  }, [event]);

  return (
    <div>
      <h3>{event.name}</h3>
      <p>{timeString}</p>
    </div>
  );
};
