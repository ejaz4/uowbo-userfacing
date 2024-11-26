import { Link } from "lucide-react";
import styles from "./chooser.module.css";

export const ChooserContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={styles.chooser}>{children}</div>;
};

export const ChooserOption = ({
  label,
  image,
  href,
}: {
  label: string;
  image: React.ReactNode;
  href: string;
}) => {
  return;
  <Link>
    <div></div>
  </Link>;
};
