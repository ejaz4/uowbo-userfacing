import { LoaderCircle } from "lucide-react";
import styles from "./loader.module.css";

export const ActivitySpinner = () => {
  return (
    <div className={styles.spinner}>
      <LoaderCircle />
    </div>
  );
};
