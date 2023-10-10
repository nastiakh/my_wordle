import "./App.css";
import { emptyTable } from "./Words.js";
import { useState } from "react";
import { createContext } from "react";
import Table from "./components/Table";
import Keyboard from "./components/Keyboard";

export const AppContext = createContext();

function App() {
  const [table, setTable] = useState(emptyTable);
  const [attempt, setAttempt] = useState({ attemptNum: 0, letterPos: 0 });
  const onEnter = () => {
    if (attempt.letterPos !== 5) return;
    setAttempt({ attemptNum: attempt.attemptNum + 1, letterPos: 0 });
  };
  const onDelete = () => {
    if (attempt.letterPos !== 0) {
      const newTable = [...table];
      newTable[attempt.attemptNum][attempt.letterPos - 1] = "";
      setTable(newTable);
      setAttempt({ ...attempt, letterPos: attempt.letterPos - 1 });
    }
  };
  const onLetter = (keyVal) => {
    if (attempt.letterPos > 4) return;
    const newTable = [...table];
    newTable[attempt.attemptNum][attempt.letterPos] = keyVal;
    setTable(newTable);
    setAttempt({ ...attempt, letterPos: attempt.letterPos + 1 });
  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <AppContext.Provider
          value={{
            table,
            setTable,
            attempt,
            setAttempt,
            onEnter,
            onDelete,
            onLetter,
          }}
        >
          <div className="game">
            <Table />
            <Keyboard />
          </div>
        </AppContext.Provider>
      </nav>
    </div>
  );
}

export default App;
