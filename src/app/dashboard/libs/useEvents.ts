import { Event } from "@prisma/client";
import { useState, useEffect } from "react";
import { useToken } from "./useToken";

export const useEvents = (guildId: string) => {
  const [events, setEvents] = useState<Event[] | null>(null);
  const [loaded, setLoaded] = useState(true);
  const token = useToken();

  useEffect(() => {
    if (!guildId) return;
    if (!token) return;
    if (!loaded) return;

    setLoaded(false);

    const ls = window.localStorage;

    fetch(`/api/dashboard/${guildId}/events/list`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.status === 404) {
          console.error(
            `The guild with ID ${guildId} does not exist or you do not have permission to view it.`
          );
        }
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setTimeout(() => setLoaded(true), 1000);
      });
  }, [guildId, token, loaded]);

  return events;
};

// export const useEvents = (guildId: string) => {
//   const [events, setEvents] = useState<Event[] | null>(null);
//   const [loaded, setLoaded] = useState(true);
//   const token = useToken();

//   useEffect(() => {
//     if (!token) return;
//     setLoaded(false);

//     fetch(`/api/dashboard/${guildId}/events/list`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setEvents(data);
//         setTimeout(() => {
//           setLoaded(true);
//         }, 1000);
//       });
//   }, [guildId, loaded, token]);

//   return events;
// };
