import { useState } from "react";
import "../styles/MainBoard.css";
import _ from "lodash";
import wordList from "../words.js";
import Jumble from "./Jumble";

function MainBoard() {
  const [words, setWords] = useState(wordList.split("\n"));
  const [word, setWord] = useState(_.sample(words));
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    return setAnswer(e.target.value);
  };

  const playRound = (e) => {
    e.preventDefault();
    if (word === answer) {
      setScore(score + 1);
    }
    // Keep an eye out if this allows a word to repeat a single time
    setWords(words.filter((entry) => entry !== word));
    if (words.length < 1)
      return setWord(`Round over! You scored ${score} points!`);

    setWord(_.sample(words));
    setAnswer("");
  };

  return (
    <main className="main-board">
      <div className="board-header">
        <div className="header-cell">Score: {score}</div>
        <div className="header-cell">Hint</div>
        <div className="header-cell">Grade: 5</div>
      </div>

      <Jumble word={word} />

      <form className="board-input">
        <input
          className="main-input"
          type="text"
          onChange={handleChange}
          value={answer}
        />
        <div className="button-container">
          <button onClick={(e) => playRound(e)}>Pass</button>
          <button onClick={(e) => playRound(e)}>Enter</button>
        </div>
      </form>
    </main>
  );
}

export default MainBoard;
