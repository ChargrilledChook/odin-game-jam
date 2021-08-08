import "../styles/BoardHeader.css";

function BoardHeader({ score, round, toggleHint }) {
  const displayRound = () => (round > 20 ? 20 : round);
  return (
    <div className="board-header">
      <div className="header-cell">Score: {score}</div>
      <button onClick={() => toggleHint()} className="button">
        Hint
      </button>
      <div className="header-cell">Word: {displayRound()} / 20</div>
    </div>
  );
}

export default BoardHeader;
