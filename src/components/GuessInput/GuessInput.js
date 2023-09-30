import React from "react";

function GuessInput({ handleAddWord, isGameOver }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuess("");
    handleAddWord(guess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        pattern="^.{5,}$"
        required
        title={`5 Character Minimum.`}
        value={guess}
        onChange={(e) => {
          const cleaned = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
          setGuess(cleaned);
        }}
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessInput;
