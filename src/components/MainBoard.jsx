import React, { useEffect, useState } from "react";
import "../styles/MainBoard.css";
import _ from "lodash";
import { wordList } from "../words/words.js";
import Jumble from "./Jumble";
import BoardInput from "./BoardInput";
import BoardHeader from "./BoardHeader";
import GameOver from "./GameOver";

function MainBoard() {
  const [words, setWords] = useState(_.shuffle(wordList).slice(0, 20));
  const [word, setWord] = useState(_.sample(words));
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState(false);
  const [round, setRound] = useState(1);

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
    setRound(round + 1);
    setWords(words.filter((entry) => entry.word !== word.word));

    setAnswer("");
  };

  useEffect(() => setWord(_.sample(words)), [words]);

  const reset = () => {
    setScore(0);
    setRound(1);
    setWords(_.shuffle(wordList).slice(0, 20));
  };

  const toggleHint = () => {
    return hint ? setHint(false) : setHint(true);
  };

  // Render the gameover screen if word hasn't been selected yet, this stops the little flash as the word list resets
  const checkGameOver = () => {
    if (word && words.length > 0) {
      return (
        <Jumble word={word.word} hint={hint} definition={word.definition} />
      );
    } else {
      return <GameOver score={score} reset={reset} />;
    }
  };

  return (
    <main className="main-board">
      <BoardHeader score={score} round={round} toggleHint={toggleHint} />
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
