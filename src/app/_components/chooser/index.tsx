import Link from "next/link";
import styles from "./chooser.module.css";
import { ChevronRight } from "lucide-react";

export const ChooserContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={styles.container}>{children}</div>;
};

export const ChooserOption = ({
  label,
  image,
  href,
}: {
  label: string;
  image?: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link className={styles.option} href={href ? href : ""}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 16,
        }}
      >
        {image && image}
        <p>{label}</p>
      </div>
      <ChevronRight size={16} />
    </Link>
  );
};
