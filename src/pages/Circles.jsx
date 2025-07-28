// src/pages/Circles.jsx
import React from "react";
import { circles } from "../data/mockDiscussions";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function Circles() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "1rem", textAlign: "center" }}>
      <h1>Whisker Circles</h1>
      <p>Select a circle to explore discussions.</p>
      <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
        {circles.map((circle) => (
          <Link
            to={`/circles/${circle.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
          >
          <div
            key={circle.id}
            style={{
              backgroundColor: circle.color,
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)"
            }}
          >
            <h2>{circle.name}</h2>
            <p>{circle.posts.length} recent posts</p>
          </div>
        </Link>
        ))}
      </div>

      </div>
    </div>
  );
}

export default Circles;
