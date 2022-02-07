import { Dispatch } from "@reduxjs/toolkit";
import { NoteActionTypes, TNoteState } from "../../types/note";
import { INote } from "../../models/note";

export let setNoteToStore = (note: INote) => {
  return async (dispatch: Dispatch<TNoteState>) => {
    try {
      dispatch({ type: NoteActionTypes.SET_NOTE_SUCCESS, payload: note });
    } catch (e) {
      let errorString: string = "Set note error";
      dispatch({
        type: NoteActionTypes.SET_NOTE_ERROR,
        payload: errorString,
      });
      throw new Error(errorString);
    }
  };
};

export let saveNotToStorage = async (note: INote) => {};
