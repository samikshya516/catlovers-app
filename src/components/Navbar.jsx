import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>🐱 CatLovers</div>
      <ul className={styles.navlinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/circles">Circles</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
