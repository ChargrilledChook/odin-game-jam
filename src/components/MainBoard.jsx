import React, { useState } from "react";
import "../styles/MainBoard.css";
import _ from "lodash";
import wordList from "../words.js";

function MainBoard() {
  const [words, setWords] = useState(wordList.split("\n"));
  const [word, setWord] = useState(_.sample(words));
  // const [jumble, setJumble] = _.shuffle(word.split("")).join(" ").toUpperCase();
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const jumbledWord = _.shuffle(word.split("")).join(" ").toUpperCase();
  const handleChange = (e) => {
    return setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    console.log(word);
    console.log(answer);
    console.log(word === answer);
    return word === answer;
  };

  const playRound = () => {
    if (checkAnswer()) {
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

      <div className="center-text">
        <h2 className="jumble">{jumbledWord}</h2>
        <p className="hint-text">Text that is jumbled</p>
      </div>

      <div className="board-input">
        <input
          className="main-input"
          type="text"
          onChange={handleChange}
          value={answer}
        />
        <div className="button-container">
          <button onClick={() => playRound()}>Pass</button>
          <button onClick={() => playRound()}>Enter</button>
        </div>
      </div>
    </main>
  );
}

export default MainBoard;
