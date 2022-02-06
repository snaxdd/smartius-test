import React, { FC, useEffect, useState } from "react";
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import { ClickableIcon } from "../ClickableIcon";
import { IconTypes } from "../Icon/types";
import { Input } from "../Input";
import { Button } from "../Button";

enum EditorStyles {
  Bold = "BOLD",
  Italic = "ITALIC",
  Underline = "UNDERLINE",
}

export const AddNoteEditor: FC = () => {
  const [textareaActive, setTextareaActive] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  let toggleTextareaState = () => setTextareaActive((prevState) => !prevState);

  let onChange = (type: EditorStyles) => {
    setEditorState((prevState) =>
      RichUtils.toggleInlineStyle(editorState, type)
    );
  };

  let onBoldClick = () => {
    onChange(EditorStyles.Bold);
    console.log(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div style={{ padding: 25, backgroundColor: "white" }}>
      <div className="note-editor_interface-container">
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={onBoldClick}
          icon={IconTypes.Bold}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={() => {}}
          icon={IconTypes.Italic}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={() => {}}
          icon={IconTypes.Underline}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={() => {}}
          icon={IconTypes.Ordered}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={() => {}}
          icon={IconTypes.Disordered}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={() => {}}
          icon={IconTypes.Replay}
        />
      </div>
      <Input
        onChange={() => {}}
        value={""}
        title="Название заметки"
        classNames="note-editor_title-input"
      />
      <span className="note-editor_text-title">Комментарий</span>
      <div
        className={`note-editor_text-container ${
          textareaActive ? "note-editor_text-container--active" : ""
        }`}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          onBlur={toggleTextareaState}
          onFocus={toggleTextareaState}
        />
      </div>
      <Button
        title="Добавить"
        width={177}
        classNames="note-editor_add-button"
      />
    </div>
  );
};
