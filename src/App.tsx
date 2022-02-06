import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotesPage } from "./pages/Notes";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
