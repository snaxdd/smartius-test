import React from "react";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { IconTypes } from "../../components/Icon/types";
import { Note } from "../../components/Note";
import { AddNoteEditor } from "../../components/AddNoteEditor";
import { Modal } from "../../components/Modal";
import { Link } from "react-router-dom";

let notes = [
  {
    id: 1,
    title: "Длинный заголовок заметки номер",
    subTitle: "01 января 2021",
  },
  {
    id: 2,
    title: "Длинный заголовок заметки номер",
    subTitle: "01 января 2021",
  },
  {
    id: 3,
    title: "Длинный заголовок заметки номер",
    subTitle: "01 января 2021",
  },
  {
    id: 4,
    title: "Длинный заголовок заметки номер",
    subTitle: "01 января 2021",
  },
  {
    id: 5,
    title: "Длинный заголовок заметки номер",
    subTitle: "01 января 2021",
  },
  {
    id: 6,
    title: "Длинный заголовок заметки номер",
    subTitle: "01 января 2021",
  },
  {
    id: 7,
    title: "Длинный заголовок заметки номер",
    subTitle: "01 января 2021",
  },
  {
    id: 8,
    title: "Длинный заголовок заметки номер",
    subTitle: "01 января 2021",
  },
];

export const NotesPage = () => {
  return (
    <>
      <Header />
      <Modal
        isOpened={false}
        children={<AddNoteEditor stylesContainer={{ width: 470 }} />}
      />
      <main className="notes-page">
        <div className="notes-page_container">
          <div className="notes-page_title-container">
            <h1 className="notes-page_title">Заметки</h1>
            <Button
              classNames="notes-page_add-note-button"
              title="Добавить заметку"
              icon={IconTypes.Add}
            />
          </div>
          {notes.length && (
            <div className="notes-page_note-container">
              {notes.map((note) => (
                <Link
                  to={`/note/${note.id}`}
                  children={
                    <Note
                      title={note.title + ` ${note.id}`}
                      subTitle={note.subTitle}
                      key={note.id}
                    />
                  }
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};
