import { combineReducers } from "@reduxjs/toolkit";
import { notesReducer } from "./notesReducer";
import { noteReducer } from "./noteReducer";

export const rootReducer = combineReducers({
  notesReducer,
  noteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
