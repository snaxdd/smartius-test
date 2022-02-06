import { combineReducers } from "@reduxjs/toolkit";
import { notesReducers } from "./notesReducers";

export const rootReducer = combineReducers({
  notesReducer: notesReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
