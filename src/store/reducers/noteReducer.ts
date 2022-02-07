import { NoteActionTypes, NoteState, TNoteState } from "../../types/note";

let initialState: NoteState = {
  note: undefined,
  loading: false,
  error: "",
};

export const noteReducer = (
  state: NoteState = initialState,
  action: TNoteState
) => {
  switch (action.type) {
    case NoteActionTypes.GET_NOTE:
      return { ...state, loading: true };
    case NoteActionTypes.SET_NOTE_SUCCESS:
      return { ...state, loading: false, error: "", note: action.payload };
    case NoteActionTypes.SET_NOTE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
