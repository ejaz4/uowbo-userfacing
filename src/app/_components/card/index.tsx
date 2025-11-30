import type React from "react";
import styles from "./card.module.css";

export const FlowCard = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.card}>{children}</section>;
};
