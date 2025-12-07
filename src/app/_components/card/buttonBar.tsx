import type React from "react";
import styles from "./card.module.css";

export const ButtonBar = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.buttonBar}>{children}</section>;
};
