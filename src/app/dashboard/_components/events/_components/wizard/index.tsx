import popup from "@/app/dashboard/popups.module.css";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useToken } from "@/app/dashboard/libs/useToken";

export const EventsWizard = ({
  setPopup,
  guildId,
}: {
  setPopup: (popup: boolean) => void;
  guildId: string;
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [time, setTime] = useState<string>(moment().format("YYYY-MM-DDTHH:mm"));

  const [startTime, setStartTime] = useState<Date>(moment(time).utc().toDate());

  const [endTime, setEndTime] = useState<Date>(startTime);
  const endTimeRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);
  const token = useToken();

  useEffect(() => {
    if (!endTimeRef.current) return;
    console.log(startTime);
    if (startTime.getTime() > endTime.getTime()) {
      setEndTime(startTime);
      endTimeRef.current.value = moment(startTime).format("YYYY-MM-DDTHH:mm");
    }
  }, [startTime]);

  const sendEvent = async () => {
    if (!token) {
      setError("You must be logged in to create an event.");
      return;
    }

    if (!name || !description) {
      setError(`${!name ? "Event name" : "Description"} is required.`);
      return;
    }

    if (startTime.getTime() >= endTime.getTime()) {
      setError("End time must be after start time.");
      return;
    }

    const req = await fetch(`/api/dashboard/${guildId}/events/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        name,
        description,
        start: startTime.toUTCString(),
        end: endTime.toUTCString(),
      }),
    });

    if (!req.ok) {
      const res = await req.json();
      setError(res.message || "An unknown error occurred.");
      return;
    }

    setPopup(false);
  };

  return (
    <div className={popup.container}>
      <div className={popup.card}>
        <h2>Creating a new event</h2>
        <p>Event name</p>

        <input
          onChange={(e) => setName(e.currentTarget.value.trim())}
          type="text"
          placeholder="Event name"
        />

        <p>Description</p>
        <textarea
          onChange={(e) => {
            setDescription(e.currentTarget.value.trim());
          }}
          name="description"
        ></textarea>

        <p>Start date and time</p>
        <input
          type="datetime-local"
          name="start"
          min={time}
          onChange={(e) => setStartTime(moment(e.target.value).utc().toDate())}
          defaultValue={time}
        />

        <p>End date and time</p>
        <input
          type="datetime-local"
          name="start"
          min={time}
          onChange={(e) => setEndTime(moment(e.target.value).utc().toDate())}
          defaultValue={time}
          ref={endTimeRef}
        />

        <p>You can customise, add hosts and restrict invites later.</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 4 }}>
          <button onClick={() => setPopup(false)}>Cancel</button>
          <button onClick={sendEvent}>Create</button>
        </div>
      </div>
    </div>
  );
};
