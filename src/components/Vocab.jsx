import { wordList } from "../words/newWords";

function Vocab(props) {
  return (
    <main className="vocab">
      {wordList.map((entry) => {
        return (
          <div>
            <h2>{entry.name}</h2>
            <p>{entry.definition}</p>
          </div>
        );
      })}
    </main>
  );
}

export default Vocab;
