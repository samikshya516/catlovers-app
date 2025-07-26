// src/components/ReplyCard.jsx
import React from "react";

function ReplyCard({ author, content }) {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "10px",
        borderRadius: "6px",
        marginTop: "6px",
        borderLeft: "4px solid #ccc"
      }}
    >
      <p style={{ marginBottom: "4px" }}>{content}</p>
      <p style={{ fontSize: "0.85rem", color: "#777" }}>— {author}</p>
    </div>
  );
}

export default ReplyCard;
