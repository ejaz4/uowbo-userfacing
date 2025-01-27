import { useEffect, useState } from "react";
import { useToken } from "./useToken";

export const useRoles = (guildId: string) => {
  const token = useToken();
  const [roles, setRoles] = useState<
    {
      id: string;
      name: string;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    if (!guildId) return;
    console.log(guildId);
    fetch(`/api/dashboard/${guildId}/roles`)
      .then((res) => res.json())
      .then((data) => {
        setRoles(data);
      });
  }, [guildId]);

  return roles;
};
