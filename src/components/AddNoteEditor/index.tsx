import React, { FC, useEffect, useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { ClickableIcon } from "../ClickableIcon";
import { IconTypes } from "../Icon/types";
import { Input } from "../Input";
import { Button } from "../Button";
import { AddNoteEditorProps } from "./interfaces";
import { stateToHTML } from "draft-js-export-html";
import { INote } from "../../models/note";

enum EditorStyles {
  Bold = "BOLD",
  Italic = "ITALIC",
  Underline = "UNDERLINE",
  Disordered = "unordered-list-item",
  Ordered = "ordered-list-item",
}

export const AddNoteEditor: FC<AddNoteEditorProps> = ({
  classNames = "",
  stylesContainer,
}) => {
  const [textareaActive, setTextareaActive] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  let toggleTextareaState = () => setTextareaActive((prevState) => !prevState);

  let onChange = (type: EditorStyles) => {
    setEditorState((prevState) => RichUtils.toggleInlineStyle(prevState, type));
  };

  let onBoldClick = () => onChange(EditorStyles.Bold);
  let onItalicClick = () => onChange(EditorStyles.Italic);
  let onUnderlineClick = () => onChange(EditorStyles.Underline);
  let onDisorderedClick = () =>
    setEditorState((prevState) =>
      RichUtils.toggleBlockType(prevState, EditorStyles.Disordered)
    );
  let onOrderedClick = () =>
    setEditorState((prevState) =>
      RichUtils.toggleBlockType(prevState, EditorStyles.Ordered)
    );

  let onAddNoteClick = () => {
    let currentContent = editorState.getCurrentContent();
    let html = stateToHTML(currentContent);
    let note: INote = {
      id: Date.now(),
      title: "test",
      createdAt: Date.now().toString(),
      text: html,
    };
  };

  return (
    <div style={stylesContainer} className={`note-editor ${classNames}`}>
      <div className="note-editor_interface-container">
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={onBoldClick}
          icon={IconTypes.Bold}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={onItalicClick}
          icon={IconTypes.Italic}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={onUnderlineClick}
          icon={IconTypes.Underline}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={onOrderedClick}
          icon={IconTypes.Ordered}
        />
        <ClickableIcon
          classNames="note-editor_clickable-icon"
          onClick={onDisorderedClick}
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
        onClick={onAddNoteClick}
      />
    </div>
  );
};
