import { joinClasses } from "@/libs/joinClasses";
import styles from "./skeleton.module.css";

export const Skeleton = ({
  width,
  height,
  count = 1,
  borderRadius = 8,
  animation = true,
}: {
  width: number | string;
  height: number | string;
  count?: number;
  borderRadius?: number;
  animation?: boolean;
}) => {
  return (
    <>
      {[...new Array(count)].map((e, index) => {
        return (
          <div
            key={index}
            className={joinClasses(
              styles.skeleton,
              !animation ? styles.noAnimate : ""
            )}
            style={{
              width,
              height,
              borderRadius,
            }}
          ></div>
        );
      })}
    </>
  );
};
