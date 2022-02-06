import React, { FC, memo } from "react";
import { NoteProps } from "./interfaces";
import { Icon } from "../Icon";
import { IconTypes } from "../Icon/types";

export const Note: FC<NoteProps> = ({ classNames = "", title, createdAt }) => {
  return (
    <div className={`note ${classNames}`}>
      <h3 className="note_title">{title}</h3>
      <div className="note_sub-title-container">
        <span className="note_sub-title">{createdAt}</span>
        <Icon name={IconTypes.Arrow} classNames="note_icon" />
      </div>
    </div>
  );
};

export const MemoizedNote = memo(Note);
