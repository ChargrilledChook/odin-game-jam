import "../styles/BoardHeader.css";

function BoardHeader({ score, grade }) {
  return (
    <div className="board-header">
      <div className="header-cell">Score: {score}</div>
      <div className="header-cell">Hint</div>
      <div className="header-cell">Grade: {grade}</div>
    </div>
  );
}

export default BoardHeader;
