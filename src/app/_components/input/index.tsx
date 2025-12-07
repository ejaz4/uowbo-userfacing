import type React from "react";
import styles from "./input.module.css";

export const TextInput = ({
  icon,
  ...props
}: {
  icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.textInputContainer}>
      {icon && icon}
      <input type="text" {...props} />
    </div>
  );
};
