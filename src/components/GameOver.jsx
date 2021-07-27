import "../styles/GameOver.css";

function GameOver({ score }) {
  return <h2 className="game-over">Round Over! <br></br> You scored {score} points.</h2>;
}

export default GameOver;
