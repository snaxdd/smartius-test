import React from "react";
import { Button } from "./components/Button";
import { IconTypes } from "./components/Icon/types";
import { Input } from "./components/Input";
import { Note } from "./components/Note";

export function App() {
  return (
    <div className="app">
      <Button title="Добавить заметку" icon={IconTypes.Add} />
      <Input
        value={""}
        onChange={(event) => console.log(event.target.value)}
        placeholder="Введите текст"
      />
      <Note
        title="Длинный заголовок заметки номер 1"
        subTitle="01 января 2021"
      />
    </div>
  );
}
