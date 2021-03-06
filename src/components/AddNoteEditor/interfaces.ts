import { CSSProperties, MouseEvent } from "react";

export interface AddNoteEditorProps {
  classNames?: string;
  stylesContainer?: CSSProperties;
  title?: string;
  editorContent?: string;
  noteId?: number;
  isEdit?: boolean;
  onClose: () => void;
}
