import React from "react";

function EndBanner({ hasWon, answer, num, restartGame }) {
  const happyContent = (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{`${num} ${num === 1 ? "guess" : "guesses"}`}</strong>
    </p>
  );

  const sadContent = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>
    </p>
  );

  return (
    <div className={`${hasWon ? "happy" : "sad"} banner`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          restartGame();
        }}
      >
        <button
          style={{
            position: "absolute",
            top: -4,
            right: 10,
            color: "white",
            fontSize: "30px",
            fontWeight: 900,
          }}
        >
          ⟳
        </button>
      </form>
      {hasWon ? happyContent : sadContent}
    </div>
  );
}

export default EndBanner;
