"use client";
import styles from "./text.module.css";

export const ErrorText = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles.error}>{children}</p>;
};
