import React, { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { IconTypes } from "../../components/Icon/types";
import { ContentContainer } from "../../components/ContentContainer";
import { useAppSelector } from "../../hooks/useTypedSelector";
import { INote } from "../../models/note";
import { useActions } from "../../hooks/useActions";
import { Icon } from "../../components/Icon";
import { UserComment } from "../../components/UserComment";
import { Modal } from "../../components/Modal";
import { AddNoteEditor } from "../../components/AddNoteEditor";

export const NotePage: FC = () => {
  const [currentNote, setCurrentNote] = useState<INote>();
  const { notes, loading, error } = useAppSelector(
    (state) => state.notesReducer
  );
  const { getNotes } = useActions();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  let contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    searchCurrentNote();
  }, [notes]);

  useEffect(() => {
    if (currentNote) {
      contentRef.current!.innerHTML = currentNote.text;
    }
  }, [currentNote]);

  const searchCurrentNote = () => {
    let foundNote = notes.find((note) => note.id === Number.parseFloat(id!));
    setCurrentNote(foundNote);
  };

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
      {showModal && currentNote && (
        <Modal
          onAreaClick={closeModal}
          isOpened={showModal}
          children={
            <AddNoteEditor
              noteId={currentNote.id}
              stylesContainer={{ width: 470 }}
              title={currentNote.title}
              editorContent={currentNote.text}
              isEdit
            />
          }
        />
      )}
      <main className="note-page">
        <ContentContainer
          classNames="note-page_content-container"
          title={currentNote?.title!}
          buttonTitle="Править заметку"
          buttonIcon={IconTypes.Edit}
          error={error}
          loading={loading}
          onButtonClick={toggleModalShow}
          backButtonLink="/"
        >
          {currentNote && (
            <UserComment onDeleteClick={() => {}} date={currentNote.createdAt}>
              <div ref={contentRef} />
            </UserComment>
          )}
        </ContentContainer>
      </main>
    </>
  );
};
