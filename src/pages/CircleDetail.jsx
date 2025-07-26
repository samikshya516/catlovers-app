// src/pages/CircleDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { circles } from "../data/mockDiscussions";
import ThreadCard from "../components/ThreadCard";
import { useNavigate } from "react-router-dom";



function CircleDetail() {
  const { circleId } = useParams(); // gets the ID from the URL
  const circle = circles.find(c => c.id === parseInt(circleId));
  const navigate = useNavigate();


  if (!circle) return <p>Circle not found.</p>;

  return (
    <div style={{ backgroundColor: circle.color, padding: "20px" }}>
      <h1>{circle.name}</h1>
      <p>Welcome to the {circle.name} circle. Share, connect, and support.</p>
      <div style={{ marginTop: "20px" }}>
        <h2>Discussion Threads</h2>
        {circle.posts.length === 0 ? (
            <p>No posts yet. Start a new thread!</p>
        ) : (
            circle.posts.map((post) => (
                <ThreadCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    replies={post.replies}
                />
                ))

        )}
        </div>
        {/* New Thread Button */}
        <button
            onClick={() => navigate(`/circles/${circleId}/new-thread`)}
            style={{
                marginTop: "30px",
                padding: "10px 16px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
            }}
        >
            + New Thread
        </button>



    </div>
  );
}

export default CircleDetail;
