import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import Results from "../Results";
import EndBanner from "../EndBanner/EndBanner";

const BLANK = () => {
  return range(NUM_OF_GUESSES_ALLOWED).map(() => "");
};

const NEW_ANSWER = () => {
  const answer = sample(WORDS).toUpperCase();
  console.info({ answer });
  return answer;
};

function Game() {
  const [answer, setAnswer] = React.useState(NEW_ANSWER);
  const [list, setList] = React.useState(BLANK);
  const [idx, setIdx] = React.useState(0);
  const [hasWon, setHasWon] = React.useState(false);
  const isGameOver = hasWon || idx >= NUM_OF_GUESSES_ALLOWED;

  const handleAddWord = (word) => {
    const nextList = [...list];
    nextList[idx] = word;

    setIdx(idx + 1);
    setList(nextList);
    setHasWon(word === answer);
  };

  const restartGame = () => {
    setList(BLANK);
    setIdx(0);
    setHasWon(false);
    setAnswer(NEW_ANSWER);
  };

  return (
    <>
      <Results list={list} answer={answer} />
      <GuessInput handleAddWord={handleAddWord} isGameOver={isGameOver} />
      {isGameOver && (
        <EndBanner
          hasWon={hasWon}
          num={idx}
          answer={answer}
          restartGame={restartGame}
        />
      )}
    </>
  );
}

export default Game;
