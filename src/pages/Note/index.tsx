import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";

export const NotePage: FC = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <main>
        <span>id: {id}</span>
      </main>
    </>
  );
};
