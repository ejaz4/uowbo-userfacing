"use client";
import { joinClasses } from "@/libs/joinClasses";
import styles from "../../event.module.css";
import { useState } from "react";
import { Event } from "@prisma/client";

export const LocationInfoBox = ({
  location = "No location set",
  isEditable = false,
  updateSetting,
}: {
  location: string;
  isEditable?: boolean | "" | null;
  updateSetting?: (settings: Partial<Event>) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(location);

  const handleDoubleClick = () => {
    if (isEditable) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (updateSetting) {
      updateSetting({
        location: editValue,
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleBlur();
    }
  };

  return (
    <div
      className={joinClasses(styles.infoBox)}
      onDoubleClick={handleDoubleClick}
      style={{ cursor: isEditable ? "pointer" : "default" }}
    >
      <span className="label">Location</span>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
            fontSize: "inherit",
            fontFamily: "inherit",
          }}
        />
      ) : (
        <p>{editValue}</p>
      )}
    </div>
  );
};
