import React, { MouseEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { IconTypes } from "../../components/Icon/types";
import { Note } from "../../components/Note";
import { AddNoteEditor } from "../../components/AddNoteEditor";
import { Modal } from "../../components/Modal";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { ContentContainer } from "../../components/ContentContainer";

export const NotesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { notes, loading, error } = useAppSelector(
    (state) => state.notesReducer
  );
  const { getNotes } = useActions();

  useEffect(() => {
    getNotes();
  }, []);

  let toggleModalShow = () => setShowModal((prevState) => !prevState);
  let closeModal = (event: MouseEvent<HTMLElement>) => {
    let { currentTarget, target } = event;

    if (target === currentTarget) {
      setShowModal(false);
    }
  };
  return (
    <>
      <Header />
      {showModal && (
        <Modal
          onAreaClick={closeModal}
          isOpened={showModal}
          children={<AddNoteEditor stylesContainer={{ width: 470 }} />}
        />
      )}
      <main className="notes-page">
        <ContentContainer
          title="Заметки"
          buttonTitle="Добавить заметку"
          buttonIcon={IconTypes.Add}
          error={error}
          loading={loading}
          onButtonClick={toggleModalShow}
        >
          {notes.length ? (
            <div className="notes-page_note-container">
              {notes.map((note) => (
                <Link
                  key={note.id}
                  to={`/note/${note.id}`}
                  children={
                    <Note title={note.title} createdAt={note.createdAt} />
                  }
                />
              ))}
            </div>
          ) : (
            <span>Список заметок пуст</span>
          )}
        </ContentContainer>
      </main>
    </>
  );
};
