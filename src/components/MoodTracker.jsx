import React, { useState } from "react";
import styles from "./MoodTracker.module.css";


const moods = [
  { emoji: "😸", label: "Happy" },
  { emoji: "😿", label: "Sad" },
  { emoji: "😴", label: "Sleepy" },
  { emoji: "😰", label: "Anxious" },
  { emoji: "🥰", label: "Loved" },
  { emoji: "😾", label: "Grumpy" },
];

export default function MoodTracker() {
  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
  const [selectedMood, setSelectedMood] = useState(() => {
    const savedMood = localStorage.getItem(`mood-${today}`);
    return savedMood || null;
  });

  function handleMoodClick(moodEmoji) {
    setSelectedMood(moodEmoji);
    localStorage.setItem(`mood-${today}`, moodEmoji);
  }

  function getLast7DaysMoods() {
    const days = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split("T")[0];
      const mood = localStorage.getItem(`mood-${dateKey}`);
      days.push({ date: dateKey, mood });
    }

    return days;
  }
  
  return (
    <div className={styles.moodWidget}>
      <h2>How are you feeling today?</h2>
      <div className={styles.moodButtons}>
        {moods.map((mood, index) => (
          <button
            key={index}
            title={mood.label}
            onClick={() => handleMoodClick(mood.emoji)}
            className={`${styles.moodButton} ${selectedMood === mood.emoji ? styles.selected : ""}`}
          >
            {mood.emoji}
          </button>
        ))}
        <div style={{ marginTop: "20px" }}>
          <h3>Your 7 Days Mood History </h3>
          <div style={{ display: "flex", gap: "8px" }}>
            {getLast7DaysMoods().map((entry, index) => (
              <div
                key={index}
                title={`${entry.date} - ${entry.mood || "No mood selected"}`}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: entry.mood ? "#FFD1DC" : "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
              >
                {entry.mood || "?"}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}