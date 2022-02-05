import React from "react";
import { Button } from "./components/Button";
import { IconNames } from "./components/Icon/iconNames";

export function App() {
  return (
    <div className="app">
      <Button title="Добавить заметку" icon={IconNames.Add} />
    </div>
  );
}
