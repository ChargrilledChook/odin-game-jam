import { useState } from "react";
import "../styles/MainBoard.css";
import _ from "lodash";
import wordList from "../words.js";
import Jumble from "./Jumble";
import BoardInput from "./BoardInput";
import BoardHeader from "./BoardHeader";

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
    if (word === answer.toLowerCase()) {
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
      <BoardHeader score={score} />
      <Jumble word={word} />
      <BoardInput
        handleChange={handleChange}
        answer={answer}
        playRound={playRound}
      />
    </main>
  );
}

export default MainBoard;
