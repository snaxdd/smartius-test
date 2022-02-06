import React, { FC, useEffect, useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

enum EditorStyles {
  Bold = "BOLD",
  Italic = "ITALIC",
  Underline = "UNDERLINE",
}

export const AddNoteEditor: FC = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [currentStyles, setCurrentStyles] = useState([""]);

  function onChange(editorState: EditorState) {
    setEditorState((prevState) => editorState);
    setCurrentStyles(editorState.getCurrentInlineStyle().toJS());
    console.log(currentStyles);
  }

  function onBoldClick() {
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  }

  function onItalicClick() {
    onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  }

  return (
    <div style={{ padding: 25, backgroundColor: "green" }}>
      <button
        onClick={onBoldClick}
        style={{
          backgroundColor: currentStyles.includes(EditorStyles.Bold)
            ? "lightcyan"
            : "red",
        }}
      >
        BOLD
      </button>
      <button onClick={onItalicClick}>ITALIC</button>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};
