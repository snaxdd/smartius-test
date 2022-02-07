import { combineReducers } from "@reduxjs/toolkit";
import { notesReducer } from "./notesReducer";

export const rootReducer = combineReducers({
  notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
