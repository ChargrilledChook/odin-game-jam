// This is also being imported into mainboard - should it be state in a higher component and passed down as a prop?
// This would avoid importing twice / give it a single source of truth
import { wordList } from "../words/words.js";
import "../styles/Vocab.css";
import { Link } from "react-router-dom";

function Vocab(props) {
  return (
    <main className="vocab-text">
      <h1 className="page-title">Word List</h1>
      <p className="page-blurb">Refresh your knowledge before playing the game!</p>

      <Link to="/play">
        {" "}
        <button className="button">Go Back</button>
      </Link>

      
      <div className="vocab-container">
        {wordList
          .sort((a, b) => a.word.localeCompare(b.word))
          .map((entry) => {
            return (
              <div className="vocab-entry">
                <h2 className="vocab-word">{entry.word}</h2>
                <p className="vocab-def">{entry.definition}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}

export default Vocab;
