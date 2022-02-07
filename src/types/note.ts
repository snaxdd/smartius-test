import { INote } from "../models/note";

export interface NoteState {
  note?: INote;
  loading: boolean;
  error: string;
}

export enum NoteActionTypes {
  GET_NOTE = "GET_NOTE",
  SET_NOTE_SUCCESS = "SET_NOTE_SUCCESS",
  SET_NOTE_ERROR = "SET_NOTE_ERROR",
  SET_NOTE = "SET_NOTE",
}

interface GetNoteAction {
  type: NoteActionTypes.GET_NOTE;
}

interface SetNoteSuccess {
  type: NoteActionTypes.SET_NOTE_SUCCESS;
  payload: INote;
}

interface SetNoteError {
  type: NoteActionTypes.SET_NOTE_ERROR;
  payload: string;
}

export type TNoteState = GetNoteAction | SetNoteSuccess | SetNoteError;
