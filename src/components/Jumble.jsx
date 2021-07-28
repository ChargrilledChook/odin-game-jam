import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import "../styles/Jumble.css";

function Jumble({ word, definition }) {
  const [jumble, setJumble] = useState(
    shuffle(word.split("")).join(" ").toUpperCase()
  );

  // Could be the cause of the "flash" bug
  useEffect(
    () => setJumble(shuffle(word.split("")).join(" ").toUpperCase()),
    [word]
  );

  return (
    <div className="center-text">
      <h2 className="jumble">{jumble}</h2>
      <p className="hint-text">{definition}</p>
    </div>
  );
}

export default Jumble;
