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
  GET_NOTE = "GET_NOTE",
  SET_NOTE_SUCCESS = "SET_NOTE_SUCCESS",
  SET_NOTE_ERROR = "SET_NOTE_ERROR",
  SET_NOTE = "SET_NOTE",
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

export type TNotesState = GetNotesAction | SetNotesSuccess | SetNotesError;
