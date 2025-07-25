import React from "react";
import { mockStats } from "../data/mockdata";
import styles from "./CommunityStats.module.css";

function CommunityStats() {
  return (
    <section className={styles.statsSection}>
      <h2>Community at a Glance</h2>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span role="img" aria-label="cat">🐱</span>
          <h3>Total Cats</h3>
          <p>{mockStats.totalCats}</p>
        </div>
        <div className={styles.statCard}>
          <span role="img" aria-label="journal">📓</span>
          <h3>Journal Posts</h3>
          <p>{mockStats.journalPosts}</p>
        </div>
      </div>
    </section>
  );
}

export default CommunityStats;
