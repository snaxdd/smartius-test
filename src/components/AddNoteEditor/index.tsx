import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {
  ContentState,
  convertFromHTML,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import { ClickableIcon } from "../ClickableIcon";
import { IconTypes } from "../Icon/types";
import { Input } from "../Input";
import { Button } from "../Button";
import { AddNoteEditorProps } from "./interfaces";
import { stateToHTML } from "draft-js-export-html";
import { INote } from "../../models/note";
import { useActions } from "../../hooks/useActions";
import { StorageHelper } from "../../helpers/storage";
import { StorageKeys } from "../../constants/storage";
import { DateHelper } from "../../helpers/date";
import { rootStore } from "../../store";

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
  editorContent,
  title,
  noteId,
  isEdit = false,
  onClose,
}) => {
  const [textareaActive, setTextareaActive] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const { addNewNote, setNotes } = useActions();

  useEffect(() => {
    if (editorContent && title) {
      setEditableData(editorContent);
      setNoteTitle(title);
    }
  }, []);

  let toggleTextareaState = () => setTextareaActive((prevState) => !prevState);
  let onChange = (type: EditorStyles) => {
    setEditorState((prevState) => RichUtils.toggleInlineStyle(prevState, type));
  };
  let onTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNoteTitle(event.target.value);
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
  let getHtmlContent = () => {
    let currentContent = editorState.getCurrentContent();
    return stateToHTML(currentContent);
  };
  let onAddNoteClick = async () => {
    let note: INote = {
      id: Date.now(),
      title: noteTitle,
      createdAt: DateHelper.getDateNow(),
      text: getHtmlContent(),
    };
    addNewNote(note);
    await saveNoteToStorage();
    onClose();
  };
  let saveNoteToStorage = async () => {
    let { notesReducer } = rootStore.getState();
    await StorageHelper.setItem(StorageKeys.Notes, notesReducer.notes);
  };
  let setEditableData = (editorContent: string) => {
    const blocksFromHtml = convertFromHTML(editorContent);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
  };
  let onEditNote = async () => {
    let { notesReducer } = rootStore.getState();
    let newNotes: INote[] = notesReducer.notes.map((note) =>
      note.id === noteId
        ? {
            ...note,
            title: noteTitle,
            createdAt: DateHelper.getDateNow(),
            text: getHtmlContent(),
          }
        : note
    );
    setNotes(newNotes);
    await saveNoteToStorage();
    onClose();
  };

  return (
    <div style={stylesContainer} className={`note-editor ${classNames}`}>
      <ClickableIcon
        onClick={onClose}
        icon={IconTypes.Close}
        classNames="note-editor_close"
      />
      <h3 className="note-editor_title">
        {isEdit ? "Редактировать" : "Добавить"} заметку
      </h3>
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
        onChange={onTitleChange}
        value={noteTitle}
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
        title={isEdit ? "Сохранить" : "Добавить"}
        width={177}
        classNames="note-editor_add-button"
        onClick={isEdit ? onEditNote : onAddNoteClick}
      />
    </div>
  );
};
