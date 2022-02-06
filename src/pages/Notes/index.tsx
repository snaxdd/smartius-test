import React, { MouseEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { IconTypes } from "../../components/Icon/types";
import { Note } from "../../components/Note";
import { AddNoteEditor } from "../../components/AddNoteEditor";
import { Modal } from "../../components/Modal";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

export const NotesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { notes, loading, error } = useAppSelector(
    (state) => state.notesReducer
  );
  const { getNotes } = useActions();

  useEffect(() => {
    getNotes();
  }, []);

  const toggleModalShow = () => setShowModal((prevState) => !prevState);
  const closeModal = (event: MouseEvent<HTMLElement>) => {
    let { currentTarget, target } = event;

    if (target === currentTarget) {
      setShowModal(false);
    }
  };
  return (
    <>
      <Header />
      <Modal
        onAreaClick={closeModal}
        isOpened={showModal}
        children={<AddNoteEditor stylesContainer={{ width: 470 }} />}
      />
      <main className="notes-page">
        <div className="notes-page_container">
          <div className="notes-page_title-container">
            <h1 className="notes-page_title">Заметки</h1>
            <Button
              onClick={toggleModalShow}
              classNames="notes-page_add-note-button"
              title="Добавить заметку"
              icon={IconTypes.Add}
            />
          </div>
          {loading && <span>Загрузка...</span>}
          {error && <span>{error}</span>}
          {notes.length ? (
            <div className="notes-page_note-container">
              {notes.map((note) => (
                <Link
                  key={note.id}
                  to={`/note/${note.id}`}
                  children={
                    <Note
                      title={note.title + ` ${note.id}`}
                      createdAt={note.createdAt}
                    />
                  }
                />
              ))}
            </div>
          ) : (
            <span>Список заметок пустой</span>
          )}
        </div>
      </main>
    </>
  );
};
