import React, { useEffect, useState } from "react";
import "../styles/MainBoard.css";
import _ from "lodash";
import { wordList } from "../words/words.js";
import Jumble from "./Jumble";
import BoardInput from "./BoardInput";
import BoardHeader from "./BoardHeader";
import GameOver from "./GameOver";

function MainBoard() {
  const [words, setWords] = useState(wordList);
  const [word, setWord] = useState(_.sample(words));
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    return setAnswer(e.target.value);
  };

  const playRound = (e) => {
    e.preventDefault();

    // Probably a better way to do this - don't render the button, or disable it?
    if (words.length < 1) return;

    if (word.word.toLowerCase() === answer.toLowerCase()) {
      setScore(score + 1);
    }
    // Keep an eye out if this allows a word to repeat a single time
    // Looks like it probably is
    setWords(words.filter((entry) => entry.word !== word.word));

    setAnswer("");
  };

  useEffect(() => setWord(_.sample(words)), [words]);

  const reset = () => setWords(wordList);

  // Render the gameover screen if word hasn't been selected yet, this stops the little flash as the word list resets
  const checkGameOver = () => {
    if (word && words.length > 0) {
      return <Jumble word={word.word} definition={word.definition} />;
    } else {
      return <GameOver score={score} reset={reset} />;
    }
  };

  return (
    <main className="main-board">
      <BoardHeader score={score} grade={word.grade} />
      {checkGameOver()}
      <BoardInput
        handleChange={handleChange}
        answer={answer}
        playRound={playRound}
      />
    </main>
  );
}

export default MainBoard;

// <React.Fragment>
// <Jumble word={word} />
// <BoardInput
//   handleChange={handleChange}
//   answer={answer}
//   playRound={playRound}
// />
// </React.Fragment>
