import React from "react";

import Guess from "../Guess";

function Results({ list, answer }) {
  return (
    <div className="guess-results">
      {list.map((word, i) => (
        <Guess key={i} word={word} answer={answer} />
      ))}
    </div>
  );
}

export default Results;
