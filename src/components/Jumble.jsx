import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import "../styles/Jumble.css";

function Jumble({ word, definition, hint }) {
  const [jumble, setJumble] = useState(
    shuffle(word.split("")).join(" ").toUpperCase()
  );

  // Could be the cause of the "flash" bug
  useEffect(
    () => setJumble(shuffle(word.split("")).join(" ").toUpperCase()),
    [word]
  );

  const hintText = (hint) => {
    if (hint) return <p className="hint-text">{definition}</p>;
  };

  return (
    <div className="center-text">
      <h2 className="jumble">{jumble}</h2>
      {hintText(hint)}
    </div>
  );
}

export default Jumble;
