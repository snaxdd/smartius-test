import { NotesActionTypes, TNotesState } from "../../types/notes";
import { Dispatch } from "@reduxjs/toolkit";
import { INote } from "../../models/note";

let notes: INote[] = [
  {
    id: 1,
    title: "Длинный заголовок заметки номер",
    text: "01 января 2021",
    createdAt: "01 января 2021",
  },
  {
    id: 2,
    title: "Длинный заголовок заметки номер",
    text: "01 января 2021",
    createdAt: "01 января 2021",
  },
  {
    id: 3,
    title: "Длинный заголовок заметки номер",
    text: "01 января 2021",
    createdAt: "01 января 2021",
  },
  {
    id: 4,
    title: "Длинный заголовок заметки номер",
    text: "01 января 2021",
    createdAt: "01 января 2021",
  },
  {
    id: 5,
    title: "Длинный заголовок заметки номер",
    text: "01 января 2021",
    createdAt: "01 января 2021",
  },
];

export let getNotes = () => {
  return async (dispatch: Dispatch<TNotesState>) => {
    try {
      dispatch({ type: NotesActionTypes.GET_NOTES });
      dispatch({ type: NotesActionTypes.SET_NOTES_SUCCESS, payload: notes });
    } catch (e) {
      let errorString: string = "Notes load error";
      dispatch({
        type: NotesActionTypes.SET_NOTES_ERROR,
        payload: errorString,
      });
      throw new Error(errorString);
    }
  };
};
