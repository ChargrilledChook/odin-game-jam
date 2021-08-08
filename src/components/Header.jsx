import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link to="/vocab" className="hoverEffect">Word List</Link>
      <Link to="/" className="hoverEffect">Word Jamble</Link>
      <Link to="/levels" className="hoverEffect">Difficulty</Link>
    </header>
  );
}

export default Header;
