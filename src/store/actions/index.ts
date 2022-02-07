import * as NotesActionCreators from "./notesActions";
import * as NoteActionCreators from "./noteActions";

export const RootActionCreators = {
  ...NotesActionCreators,
  ...NoteActionCreators,
};
