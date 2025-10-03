import { ReactNode } from "react";
import React from "react";
import styles from "./event.module.css";

const EventLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.background}>{children}</div>;
};

export default EventLayout;
