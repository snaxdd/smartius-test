import { INote } from "../models/note";

export interface NotesState {
  notes: INote[];
  loading: boolean;
  error: string;
}

export enum NotesActionTypes {
  GET_NOTES = "GET_NOTES",
  SET_NOTES_SUCCESS = "SET_NOTES_SUCCESS",
  SET_NOTES_ERROR = "SET_NOTES_ERROR",
  SET_NOTES = "SET_NOTES",
  ADD_NEW_NOTE = "ADD_NEW_NOTE",
  ADD_NEW_NOTE_SUCCESS = "ADD_NEW_NOTE_SUCCESS",
  ADD_NEW_NOTE_ERROR = "ADD_NEW_NOTE_ERROR",
}

interface GetNotesAction {
  type: NotesActionTypes.GET_NOTES;
}

interface SetNotesSuccess {
  type: NotesActionTypes.SET_NOTES_SUCCESS;
  payload: INote[];
}

interface SetNotesError {
  type: NotesActionTypes.SET_NOTES_ERROR;
  payload: string;
}

interface AddNewNote {
  type: NotesActionTypes.ADD_NEW_NOTE;
}

interface AddNewNoteSuccess {
  type: NotesActionTypes.ADD_NEW_NOTE_SUCCESS;
  payload: INote;
}

interface AddNewNoteError {
  type: NotesActionTypes.ADD_NEW_NOTE_ERROR;
  payload: string;
}

export type TNotesState =
  | GetNotesAction
  | SetNotesSuccess
  | SetNotesError
  | AddNewNote
  | AddNewNoteSuccess
  | AddNewNoteError;
