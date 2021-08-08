import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      {" "}
      <Link to="/" className="hoverEffect">
        Home{" "}
      </Link>
      <Link to="/vocab" className="hoverEffect">
        Word List
      </Link>
    </header>
  );
}

export default Header;
