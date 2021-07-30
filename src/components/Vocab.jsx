import { wordList } from "../words/newWords";
import "../styles/Vocab.css";

function Vocab(props) {
  return (
    <main>
      <h1 className="page-title">Word List</h1>
      <p className="page-blurb">
        Short blurb about all the words in the game being here for study.
        Probably need some nav links here too - can manually type for now
      </p>
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
