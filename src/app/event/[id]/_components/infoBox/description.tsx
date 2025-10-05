"use client";
import moment from "moment";
import styles from "../../event.module.css";
import { useEffect, useState } from "react";
import { joinClasses } from "@/libs/joinClasses";
import { Event } from "@prisma/client";

export const DescriptionInfoBox = ({
  description = "No description yet",
  isEditable = false,
  updateSetting,
}: {
  description: string;
  isEditable?: boolean | "" | null;
  updateSetting: (settings: Partial<Event>) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(description);

  const handleDoubleClick = () => {
    if (isEditable) {
      setIsEditing(true);
      //   setEditValue(description);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateSetting({
      description: editValue,
    });
    description = editValue;
    // Here you could add logic to save the changes
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleBlur();
      // Here you could add logic to save the changes
    }
  };

  return (
    <div
      className={joinClasses(styles.infoBox, styles.highlight)}
      onDoubleClick={handleDoubleClick}
      style={{ cursor: isEditable ? "pointer" : "default" }}
    >
      <span className="label">Description</span>
      {isEditing ? (
        <>
          <textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{
              width: "100%",
              minHeight: "100px",
              height: "100%",
              resize: "vertical",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "inherit",
              fontFamily: "inherit",
            }}
          />
        </>
      ) : (
        editValue.split("\n").map((item, _) => <p key={_}>{item}</p>)
      )}
    </div>
  );
};
