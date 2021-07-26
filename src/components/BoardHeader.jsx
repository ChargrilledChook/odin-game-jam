import "../styles/BoardHeader.css";

function BoardHeader({ score }) {
  return (
    <div className="board-header">
      <div className="header-cell">Score: {score}</div>
      <div className="header-cell">Hint</div>
      <div className="header-cell">Grade: 5</div>
    </div>
  );
}

export default BoardHeader;
