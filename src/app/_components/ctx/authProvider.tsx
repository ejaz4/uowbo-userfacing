"use client";

import { useEffect, useState } from "react";
import { api } from "~/trpc/react";
import { AuthContext } from "./authContext";
import type { AuthContextType } from "~/const/authContextType";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const obtainAccessToken = api.auth.obtainAccessToken.useMutation();
  const [accessTokens, setAccessTokens] = useState<
    AuthContextType | undefined
  >();

  useEffect(() => {
    obtainAccessToken.mutate(undefined, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  }, []);

  return (
    <AuthContext.Provider value={accessTokens}>{children}</AuthContext.Provider>
  );
};
