import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotesPage } from "./pages/Notes";
import { NotePage } from "./pages/Note";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/note/:id" element={<NotePage />} />
      </Routes>
    </BrowserRouter>
  );
}
