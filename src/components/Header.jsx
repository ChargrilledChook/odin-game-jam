import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="site-header">
      <a href="#">
        <p>Word List</p>
      </a>
      <p>Logo Here</p>
      <a href="#">
        <p>Difficulty</p>
      </a>
    </header>
  );
}

export default Header;
