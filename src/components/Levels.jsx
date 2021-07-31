import "../styles/Levels.css";
import "../styles/generalStyles.css";
import { Router, Link, Switch, Route } from "react-router-dom";
import MainBoard from "./MainBoard";

function Levels(props) {
  return (
    <main className="level-select">
      <button className="button">Grade 6</button>
      <button className="button">Grade 7</button>
      <Link to="/play/8">
        <button className="button">Grade 8</button>
      </Link>
      <Link to="/play/all">
        <button className="button">All</button>
      </Link>
    </main>
  );
}

export default Levels;
