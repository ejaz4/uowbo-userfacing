"use client";
import { joinClasses } from "@/libs/joinClasses";
import styles from "../../event.module.css";
import { useState } from "react";
import { Event } from "@prisma/client";

export const GuestLimitInfoBox = ({
  guestLimit,
  isEditable = false,
  updateSetting,
}: {
  guestLimit: number;
  isEditable?: boolean | "" | null;
  updateSetting?: (settings: Partial<Event>) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(guestLimit.toString());

  const handleDoubleClick = () => {
    if (isEditable) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    const numValue = parseInt(editValue);
    if (!isNaN(numValue) && numValue >= 0 && updateSetting) {
      updateSetting({
        guestLimit: numValue,
      });
    } else {
      // Reset to original value if invalid
      setEditValue(guestLimit.toString());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleBlur();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === "" || /^\d+$/.test(value)) {
      setEditValue(value);
    }
  };

  return (
    <div
      className={joinClasses(styles.infoBox)}
      onDoubleClick={handleDoubleClick}
      style={{ cursor: isEditable ? "pointer" : "default" }}
    >
      <span className="label">Guest Limit</span>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "inherit",
          }}
        />
      ) : (
        <h1>{guestLimit}</h1>
      )}
    </div>
  );
};
