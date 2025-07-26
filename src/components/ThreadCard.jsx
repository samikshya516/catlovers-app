// src/components/ThreadCard.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";


function ThreadCard({ id, title, author, replies }) {
 const { circleId } = useParams(); // Needed to build the URL
  return (
    <Link
        to={`/circles/${circleId}/threads/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
    >
        <div
            style={{
                backgroundColor: "#fff",
                padding: "12px",
                borderRadius: "8px",
                marginTop: "10px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}
        >
            <h3>{title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
                Started by {author} • {replies.length} replies
            </p>
        </div>
    </Link>
  );
}

export default ThreadCard;
