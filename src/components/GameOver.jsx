import "../styles/GameOver.css";
import "../styles/generalStyles.css";

function GameOver({ score, reset }) {
  return (
    <div className="game-over">
      <h2>Round over! <br></br> You scored {score} points!</h2>
      <button onClick={reset} className="button replay">
        Play Again
      </button>
    </div>
  );
}

export default GameOver;
