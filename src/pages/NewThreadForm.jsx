// src/pages/NewThreadForm.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { circles } from "../data/mockDiscussions";

function NewThreadForm() {
  const { circleId } = useParams();
  const navigate = useNavigate();

  const circle = circles.find(c => c.id === parseInt(circleId));
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Thread Created:", { title, author });

    // Later: push to backend or local data
    navigate(`/circles/${circleId}`);
  };

  if (!circle) return <p>Circle not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Start a New Thread in {circle.name}</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title: </label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Your Name: </label><br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Create Thread
        </button>
      </form>
    </div>
  );
}

export default NewThreadForm;
