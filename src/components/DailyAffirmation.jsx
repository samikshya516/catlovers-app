import React from "react";
import { affirmations } from "../data/mockdata";
import styles from "./DailyAffirmation.module.css";

function DailyAffirmation() {
  // Get the current day index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayIndex = new Date().getDay();

  // Use modulo to cycle through affirmations if there are fewer than 7
  const affirmation = affirmations[dayIndex % affirmations.length];

  return (
    <section className={styles.affirmation}>
      <h2>Daily Affirmation</h2>
      <p>{affirmation}</p>
    </section>
  );
}

export default DailyAffirmation;
