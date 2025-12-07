import type React from "react";
import { Logo } from "../logo";
import styles from "./flow.module.css";

export const Flow = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.flow}>
      <Logo />
      {children}
    </main>
  );
};
