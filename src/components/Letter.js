import React, { useContext } from "react";
import { AppContext } from "../App";

function Letter({ rowPosition, letterPosition }) {
  const { table } = useContext(AppContext);
  const letter = table[rowPosition][letterPosition];
  return <div className="letter">{letter}</div>;
}

export default Letter;
