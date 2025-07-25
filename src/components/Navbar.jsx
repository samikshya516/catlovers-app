import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">🐱 CatLovers</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cats">Cats</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
