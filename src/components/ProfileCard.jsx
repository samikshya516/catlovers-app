import React from "react";
//import styles from './ProfileCard.module.css';


function ProfileCard({ catName, age, breed, photoURL, story, onEdit }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "1rem",
      padding: "1rem",
      backgroundColor: "#F8E8FF",
      boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "2rem auto"
    }}>
      <img
        src={photoURL}
        alt={`A cat named ${catName}`}
        style={{ width: "100%", borderRadius: "1rem" }}
      />
      <h2>{catName}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Breed:</strong> {breed}</p>
      <p><strong>Story:</strong> {story}</p>

      <button onClick={onEdit} style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: "none",
        backgroundColor: "#E8F4FF",
        cursor: "pointer"
      }}>
        Edit Profile
      </button>

      

    </div>
  );
}

export default ProfileCard;
