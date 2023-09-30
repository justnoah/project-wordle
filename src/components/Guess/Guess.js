import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ word, answer }) {
  const checked = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        let constructed = "cell";
        let letter = "";

        if (checked) {
          const result = checked[num];
          constructed += ` ${result.status}`;
          letter = result.letter;
        }

        return (
          <span key={num} className={constructed}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
