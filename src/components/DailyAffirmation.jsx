import React from "react";
import { affirmations } from "../data/mockdata";
import styles from "./DailyAffirmation.module.css";

function DailyAffirmation() {
  const dayIndex = new Date().getDay();
  const affirmation = affirmations[dayIndex % affirmations.length];

  // Function to handle sharing the affirmation
  function handleShareClick() {
    navigator.clipboard.writeText(affirmation)
      .then(() => {
        alert("Affirmation copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy.");
        console.error(err);
      });
  }

  return (
    <section className={styles.affirmation}>
      <h2>Daily Affirmation</h2>
      <p>{affirmation}</p>
      <button className={styles.shareButton} onClick={handleShareClick}>
        Share
      </button>
    </section>
  );
}

export default DailyAffirmation;
