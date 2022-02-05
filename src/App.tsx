import React from "react";
import { Button } from "./components/Button";
import { IconNames } from "./components/Icon/iconNames";
import { Input } from "./components/Input";

export function App() {
  return (
    <div className="app">
      <Button title="Добавить заметку" icon={IconNames.Add} />
      <Input
        value={""}
        onChange={(event) => console.log(event.target.value)}
        placeholder="Введите текст"
      />
    </div>
  );
}
