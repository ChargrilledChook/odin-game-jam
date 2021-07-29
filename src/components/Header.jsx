import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <a href="#">
        <p>Word List</p>
      </a>
      <Link to="/">Logo Here</Link>
      <a href="#">
        <p>Difficulty</p>
      </a>
    </header>
  );
}

export default Header;
