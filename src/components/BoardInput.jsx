import "../styles/BoardInput.css";

function BoardInput({ handleChange, answer, playRound }) {
  return (
    <form className="board-input">
      <input
        className="main-input"
        type="text"
        onChange={handleChange}
        value={answer}
      />
      <div className="button-container">
        <button onClick={(e) => playRound(e)}>Pass</button>
        <button onClick={(e) => playRound(e)}>Enter</button>
      </div>
    </form>
  );
}

export default BoardInput;
