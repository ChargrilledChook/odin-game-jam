import { wordList } from "../words/newWords";

function Vocab(props) {
  return (
    <main className="vocab">
      {wordList
        .sort((a, b) => a.word.localeCompare(b.word))
        .map((entry) => {
          return (
            <div>
              <h2>{entry.word}</h2>
              <p>{entry.definition}</p>
            </div>
          );
        })}
    </main>
  );
}

export default Vocab;
