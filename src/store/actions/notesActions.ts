import { NotesActionTypes, TNotesState } from "../../types/notes";
import { Dispatch } from "@reduxjs/toolkit";
import { INote } from "../../models/note";
import { StorageHelper } from "../../helpers/storage";
import { StorageKeys } from "../../constants/storage";

export let setNotes = () => {
  return async (dispatch: Dispatch<TNotesState>) => {
    try {
      dispatch({ type: NotesActionTypes.GET_NOTES });
      let notes = (await StorageHelper.getItem(StorageKeys.Notes)) || [];
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

export let addNewNote = (note: INote) => {
  return async (dispatch: Dispatch<TNotesState>) => {
    try {
      dispatch({ type: NotesActionTypes.ADD_NEW_NOTE });
      dispatch({ type: NotesActionTypes.ADD_NEW_NOTE_SUCCESS, payload: note });
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
