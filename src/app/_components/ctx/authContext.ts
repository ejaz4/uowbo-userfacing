"use client";

import { createContext } from "react";
import type { AuthContextType } from "~/const/authContextType";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
