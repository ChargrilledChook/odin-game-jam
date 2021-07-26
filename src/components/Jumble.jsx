import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import "../styles/Jumble.css";

function Jumble({ word }) {
  const [jumble, setJumble] = useState(
    shuffle(word.split("")).join(" ").toUpperCase()
  );

  useEffect(
    () => setJumble(shuffle(word.split("")).join(" ").toUpperCase()),
    [word]
  );

  return (
    <div className="center-text">
      <h2 className="jumble">{jumble}</h2>
      <p className="hint-text">Text that is jumbled</p>
    </div>
  );
}

export default Jumble;
