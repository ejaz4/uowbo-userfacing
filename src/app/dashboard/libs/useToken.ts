import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const useToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = searchParams.get("exchange");
    const ls = window.localStorage;

    if (token) {
      ls.setItem("token", token);
      setToken(token);
      router.push(pathname);
    } else {
      const localToken = ls.getItem("token");

      if (localToken) {
        setToken(localToken);
      }
    }
  }, []);

  return token;
};
