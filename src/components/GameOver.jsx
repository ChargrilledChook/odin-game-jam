import "../styles/GameOver.css";
import "../styles/generalStyles.css";

function GameOver({ score }) {
  return (
    <div className="game-over">
      <h2>Round over! You scored {score} points!</h2>
      <button className="button replay">Play Again</button>
    </div>
  );
}

export default GameOver;
