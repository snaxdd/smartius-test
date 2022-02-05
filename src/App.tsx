import React from "react";
import { Button } from "./components/Button";
import { Types } from "./components/Icon/types";
import { Input } from "./components/Input";

export function App() {
  return (
    <div className="app">
      <Button title="Добавить заметку" icon={Types.Add} />
      <Input
        value={""}
        onChange={(event) => console.log(event.target.value)}
        placeholder="Введите текст"
      />
    </div>
  );
}
