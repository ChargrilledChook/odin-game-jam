import "../styles/Levels.css";
import "../styles/generalStyles.css";

function Levels(props) {
  return (
    <main className="level-select">
      <div className="button">Easy</div>
      <div className="button">Medium</div>
      <div className="button">Hard</div>
      <div className="button">All</div>
    </main>
  );
}

export default Levels;
