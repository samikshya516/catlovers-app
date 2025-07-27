import React from "react";
import { journalEntries } from "../data/mockdata";
import JournalCard from "./JournalCard";
import styles from "./JournalFeed.module.css";

function JournalFeed() {
  // Dummy handlers to prevent errors
  
  const handleDelete = (id) => {
    // Implement delete logic here
    console.log("Delete entry with id:", id);
  };

  const handleEdit = (id, updatedEntry) => {
    // Implement edit logic here
    console.log("Edit entry with id:", id, "Updated entry:", updatedEntry);
  };

  return (
    <div
        className="journal-feed"
        style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
        }}
    >
        <div className={styles.feedContainer}>
            <h2 className={styles.feedTitle}>Community Journal Feed</h2>
            {journalEntries.map((entry) => (
                <JournalCard 
                    key={entry.id}
                    catName={entry.catName}
                    image={entry.image}
                    story={entry.story}
                    mood={entry.mood}
                    timestamp={entry.timestamp}
                    onDelete={() => handleDelete(entry.id)}
                    onEdit={(updatedEntry) => handleEdit(entry.id, updatedEntry)}
                />
            ))}
        </div>
    </div>
  );
}

export default JournalFeed;

