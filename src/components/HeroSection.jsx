import React from "react";
import styles from "./HeroSection.module.css";
import catHero from "../assets/cat-hero.jpg";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <img src={catHero} alt="A cute cat lying comfortably" className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1>Welcome to the Cat Lovers App</h1>
        <p>Discover, share, and celebrate the love for your feline friend.</p>
      </div>
    </section>
  );
}

export default HeroSection;
