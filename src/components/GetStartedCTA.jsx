import React from "react";
import styles from "./GetStartedCTA.module.css";
import {Link} from "react-router-dom";

function GetStartedCTA() {
  return (
    <section className={styles.ctaSection}>
      <h2>Ready to Explore?</h2>
      <div className={styles.buttonGroup}>
        <Link to="/cats" className={styles.ctaButton}>Meet the Cats</Link>
        <Link to="/journal" className={styles.ctaButton}>Start Journaling</Link>
      </div>
    </section>
  );
}

export default GetStartedCTA;
