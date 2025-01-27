import React from "react";
import styles from "./button.module.css";

export const HeaderButton = ({
  children,
  current,
  value,
  setCurrent,
}: {
  children: React.ReactNode;
  current: string;
  value: string;
  setCurrent: (current: string) => void;
}) => {
  return (
    <button
      className={`${styles.button} ${current == value ? styles.active : ""}`}
      onClick={() => setCurrent(value)}
    >
      {children}
    </button>
  );
};
