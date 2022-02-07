import React, { FC, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { IconTypes } from "../../components/Icon/types";
import { ContentContainer } from "../../components/ContentContainer";
import { useAppSelector } from "../../hooks/useTypedSelector";
import { INote } from "../../models/note";
import { useActions } from "../../hooks/useActions";

export const NotePage: FC = () => {
  const [currentNote, setCurrentNote] = useState<INote>();
  const { notes, loading, error } = useAppSelector(
    (state) => state.notesReducer
  );
  const { setNotes } = useActions();
  const { id } = useParams();
  let contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNotes();
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

  return (
    <>
      <Header />
      <main className="note-page">
        <ContentContainer
          title={currentNote?.title!}
          buttonTitle="Править заметку"
          buttonIcon={IconTypes.Edit}
          error={error}
          loading={loading}
          onButtonClick={() => {}}
        >
          <div ref={contentRef} />
        </ContentContainer>
      </main>
    </>
  );
};
