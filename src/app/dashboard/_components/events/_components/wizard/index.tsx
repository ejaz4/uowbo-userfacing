import popup from "@/app/dashboard/popups.module.css";
import { useEffect, useState } from "react";

export const EventsWizard = () => {
  const [time, setTime] = useState<string>(
    new Date(new Date().getTime() + new Date(0).getHours() * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 16)
  );

  const [startTime, setStartTime] = useState<string>(
    new Date(new Date().getTime() + new Date(0).getHours() * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 16)
  );

  useEffect(() => {
    console.log("Start time changed:", startTime);
  }, [startTime]);

  return (
    <div className={popup.container}>
      <div className={popup.card}>
        <h2>Creating a new event</h2>
        <p>Event name*</p>
        <input type="text" placeholder="Event name" />

        <p>Description</p>
        <textarea name="description"></textarea>

        <p>Start date and time</p>
        <input
          type="datetime-local"
          name="start"
          min={time}
          onChange={(e) => setStartTime(e.target.value)}
          defaultValue={time}
        />
      </div>
    </div>
  );
};
