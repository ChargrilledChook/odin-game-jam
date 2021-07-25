import React from "react";
import "../styles/MainBoard.css";

function MainBoard() {
  return (
    <main className="main-board">
      <div className="board-header">
        <div className="header-cell">Score: 4</div>
        <div className="header-cell">Hint</div>
        <div className="header-cell">Grade: 5</div>
      </div>

      <div className="center-text">
        <h2>Jumbled Text</h2>
        <p className="hint-text"></p>
      </div>

      <div className="board-input">
        <input type="text" />
        <button>Pass</button>
        <button>Enter</button>
      </div>
    </main>
  );
}

export default MainBoard;
