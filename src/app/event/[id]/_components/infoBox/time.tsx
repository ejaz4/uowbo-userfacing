"use client";
import moment from "moment";
import styles from "../../event.module.css";
import { useEffect, useState } from "react";

export const TimeInfoBox = ({
  startTime,
  endTime,
}: {
  startTime: Date;
  endTime: Date;
}) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
      weekday: "long", // "Friday"
      year: "numeric", // "2025"
      month: "long", // "October"
      day: "numeric", // "3"
      hour: "2-digit",
      minute: "2-digit",
      //   timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    setStart(dateFormatter.format(startTime));
    setEnd(dateFormatter.format(endTime));
  });

  return (
    <div className={styles.infoBox}>
      <span className="label">Time</span>
      <p>Starts {start}</p>
      <p>Ends {end}</p>
    </div>
  );
};
