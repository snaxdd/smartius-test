import { NotesActionTypes, NotesState, TNotesState } from "../../types/notes";

let initialState: NotesState = {
  notes: [],
  loading: false,
  error: "",
};

export const notesReducers = (
  state: NotesState = initialState,
  action: TNotesState
) => {
  switch (action.type) {
    case NotesActionTypes.GET_NOTES:
      return { ...state, loading: true };
    case NotesActionTypes.SET_NOTES_SUCCESS:
      return { ...state, loading: false, error: "", notes: action.payload };
    case NotesActionTypes.SET_NOTES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
