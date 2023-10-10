import React from "react";
import Letter from "./Letter";

function Table() {
  return (
    <div className="table">
      <div className="row">
        <Letter rowPosition={0} letterPosition={0} />
        <Letter rowPosition={0} letterPosition={1} />
        <Letter rowPosition={0} letterPosition={2} />
        <Letter rowPosition={0} letterPosition={3} />
        <Letter rowPosition={0} letterPosition={4} />
      </div>
      <div className="row">
        <Letter rowPosition={1} letterPosition={0} />
        <Letter rowPosition={1} letterPosition={1} />
        <Letter rowPosition={1} letterPosition={2} />
        <Letter rowPosition={1} letterPosition={3} />
        <Letter rowPosition={1} letterPosition={4} />
      </div>
      <div className="row">
        <Letter rowPosition={2} letterPosition={0} />
        <Letter rowPosition={2} letterPosition={1} />
        <Letter rowPosition={2} letterPosition={2} />
        <Letter rowPosition={2} letterPosition={3} />
        <Letter rowPosition={2} letterPosition={4} />
      </div>
      <div className="row">
        <Letter rowPosition={3} letterPosition={0} />
        <Letter rowPosition={3} letterPosition={1} />
        <Letter rowPosition={3} letterPosition={2} />
        <Letter rowPosition={3} letterPosition={3} />
        <Letter rowPosition={3} letterPosition={4} />
      </div>
      <div className="row">
        <Letter rowPosition={4} letterPosition={0} />
        <Letter rowPosition={4} letterPosition={1} />
        <Letter rowPosition={4} letterPosition={2} />
        <Letter rowPosition={4} letterPosition={3} />
        <Letter rowPosition={4} letterPosition={4} />
      </div>
      <div className="row">
        <Letter rowPosition={5} letterPosition={0} />
        <Letter rowPosition={5} letterPosition={1} />
        <Letter rowPosition={5} letterPosition={2} />
        <Letter rowPosition={5} letterPosition={3} />
        <Letter rowPosition={5} letterPosition={4} />
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Table;
