import "../styles/BoardHeader.css";

function BoardHeader({ score, grade, toggleHint }) {
  return (
    <div className="board-header">
      <div className="header-cell">Score: {score}</div>
      <button onClick={() => toggleHint()} className="hint">
        Hint
      </button>
      <div className="header-cell">Grade: {grade}</div>
    </div>
  );
}

export default BoardHeader;
