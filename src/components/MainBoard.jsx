import React, { useState } from "react";
import "../styles/MainBoard.css";
import _ from "lodash";
import { wordList } from "../words/newWords.js";
import Jumble from "./Jumble";
import BoardInput from "./BoardInput";
import BoardHeader from "./BoardHeader";
import GameOver from "./GameOver";
import Levels from "./Levels";

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
    setWord(_.sample(words));
    setAnswer("");
  };

  const reset = () => setWords(wordList);

  const checkGameOver = () => {
    if (words.length < 1) return <GameOver score={score} reset={reset} />;

    return <Jumble word={word.word} definition={word.definition} />;
  };

  return (
    <main className="main-board">
      {/* <BoardHeader score={score} />
      {checkGameOver()}
      <BoardInput
        handleChange={handleChange}
        answer={answer}
        playRound={playRound}
      /> */}
      <Levels />
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
