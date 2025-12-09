import type React from "react";
import styles from "./button.module.css";
import { joinClasses } from "~/libs/joinClasses";
import { ActivitySpinner } from "../loader/spinner";

export const Button = ({
  children,
  image,
  primary = false,
  loading,
  ...props
}: {
  children?: React.ReactNode;
  image?: React.ReactNode;
  primary?: boolean;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={joinClasses(
        styles.button ?? "",
        primary && !props.disabled ? (styles.accented ?? "") : "",
      )}
      {...props}
    >
      {loading && <ActivitySpinner />}
      {image && !loading && image}
      {children && children}
    </button>
  );
};
