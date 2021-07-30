import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link to="/vocab">Word List</Link>
      <Link to="/">Logo Here</Link>
      <Link to="/levels">Select Difficulty</Link>
    </header>
  );
}

export default Header;
