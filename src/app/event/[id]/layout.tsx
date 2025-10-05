import { ReactNode } from "react";
import React from "react";
import styles from "./event.module.css";

const EventLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.background}>
      {children}
      <div>
        <p>
          Powered by{" "}
          <a
            style={{
              fontFamily: "var(--ubuntu)",
              fontSize: 16,
            }}
          >
            uowbo!
          </a>
        </p>
      </div>
    </div>
  );
};

export default EventLayout;
