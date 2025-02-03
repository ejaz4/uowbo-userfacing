// Get the guild ID of the guild that
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useGuild = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [guildId, setGuildId] = useState<string | null>(null);
  const router = useRouter();
  const exceptions = [
    "/",
    "/privacy",
    "/terms",
    "/verify/discord",
    "/verify/insecure",
    "/verify/not-exist",
    "/verify/not-found",
  ];

  useEffect(() => {
    // Check the URL for a guild ID, and then check the search params
    if (!searchParams) return;
    const param = searchParams.get("guildId");

    if (param) {
      localStorage.setItem("guildId", param);
      return setGuildId(param);
    }

    const lsEntry = localStorage.getItem("guildId");

    if (lsEntry) {
      return setGuildId(lsEntry);
    }

    if (!pathname) return;
    if (!pathname.startsWith("/verify/")) {
      return;
    }

    if (pathname.endsWith("/guild")) {
      return;
    }

    if (pathname.endsWith("/authwall")) {
      return;
    }

    if (exceptions.includes(pathname)) {
      return;
    }

    console.log(pathname);
    const handoverId = pathname.split("/")[2];
    router.push(`/verify/${handoverId}/guild`);
  }, [pathname, searchParams]);

  return guildId;
};
