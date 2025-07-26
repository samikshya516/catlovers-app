// src/components/JournalCard.jsx
import React, { useState } from "react";


function JournalCard({ catName, image, story, mood, timestamp, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStory, setEditedStory] = useState(story);
  const [editedMood, setEditedMood] = useState(mood);
  const [editedImage, setEditedImage] = useState(image);



  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "1rem",
      padding: "1rem",
      marginBottom: "1.5rem",
      backgroundColor: "#FFF3E6"
    }}>
      <img
        src={image}
        alt={`Cat named ${catName}`}
        style={{ width: "100%", borderRadius: "1rem" }}
      />
      <h2>{catName}</h2>
      <p><strong>Mood:</strong> {mood}</p>
      <p><strong>Story:</strong> {story}</p>
      <p><strong>Date:</strong> {timestamp}</p>
      <p style={{ marginTop: "0.5rem" }}>
        ❤️ 12 Likes
      </p>
      <button onClick={onDelete} style={{ marginLeft: "0.5rem", backgroundColor: "#FFD5D5", border: "none", padding: "0.4rem 0.8rem", borderRadius: "0.4rem", cursor: "pointer" }}>
        Delete
      </button>

      <button
        onClick={() => setIsEditing(true)}
        style={{ marginLeft: "0.5rem", backgroundColor: "#D5EFFF", border: "none", padding: "0.4rem 0.8rem", borderRadius: "0.4rem", cursor: "pointer" }}
      >
        Edit
      </button>
      {isEditing && (
        <div style={{ marginTop: "1rem" }}>
          <textarea
            value={editedStory}
            onChange={(e) => setEditedStory(e.target.value)}
            placeholder="Edit story"
            style={{ width: "100%", padding: "0.5rem" }}
          />
          <br />
          <select
            value={editedMood}
            onChange={(e) => setEditedMood(e.target.value)}
            style={{ marginTop: "0.5rem" }}
          >
            <option value="playful">Playful</option>
            <option value="sleepy">Sleepy</option>
            <option value="anxious">Anxious</option>
          </select>
          <br />
          <input
            type="text"
            value={editedImage}
            onChange={(e) => setEditedImage(e.target.value)}
            placeholder="Image URL"
            style={{ marginTop: "0.5rem", width: "100%", padding: "0.5rem" }}
          />
          <br />
          <button
            onClick={() => {
              onEdit({
                catName,
                story: editedStory,
                mood: editedMood,
                image: editedImage,
                timestamp,
                id: Date.now() // if your posts use custom IDs, use post.id instead
              });
              setIsEditing(false);
            }}
            style={{ marginTop: "0.5rem", backgroundColor: "#DFFFD5", padding: "0.4rem 0.8rem", border: "none", borderRadius: "0.4rem" }}
          >
            Save Changes
          </button>
        </div>
      )}


    </div>
  );
}

export default JournalCard;

