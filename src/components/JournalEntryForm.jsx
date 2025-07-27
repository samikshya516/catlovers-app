// src/components/JournalEntryForm.jsx
import React, { useState } from "react";

function JournalEntryForm({ onAdd }) {
  const [catName, setCatName] = useState("");
  const [story, setStory] = useState("");
  const [mood, setMood] = useState("playful");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      catName,
      story,
      mood,
      image,
      timestamp: new Date().toLocaleDateString(),
    };

    onAdd(newEntry);

    // Reset the form
    setCatName("");
    setStory("");
    setMood("playful");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f0f8ff" }}>
      <h3>Add New Journal Entry</h3>
      <input
        type="text"
        placeholder="Cat's Name"
        value={catName}
        onChange={(e) => setCatName(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
        required
      />
      <textarea
        placeholder="Cat's story"
        value={story}
        onChange={(e) => setStory(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
        required
      />
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
      >
        <option value="playful">Playful</option>
        <option value="sleepy">Sleepy</option>
        <option value="anxious">Anxious</option>
      </select>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
      />
      <button
        type="submit"
        style={{ padding: "0.5rem 1rem", backgroundColor: "#DFFFD5", border: "none", borderRadius: "0.4rem", cursor: "pointer" }}
      >
        Add Entry
      </button>
    </form>
  );
}

export default JournalEntryForm;
