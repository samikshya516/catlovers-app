// src/pages/ThreadPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { circles } from "../data/mockDiscussions";
import ReplyCard from "../components/ReplyCard";

function ThreadPage() {
  const { circleId, threadId } = useParams();

  const circle = circles.find(c => c.id === parseInt(circleId));
  if (!circle) return <p>Circle not found.</p>;

  const thread = circle.posts.find(p => p.id === parseInt(threadId));
  if (!thread) return <p>Thread not found.</p>;

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <h2>{thread.title}</h2>
      <p style={{ color: "#777", marginBottom: "20px" }}>Started by {thread.author}</p>

      <h3>Replies:</h3>
      {thread.replies.length === 0 ? (
        <p>No replies yet. Be the first to respond!</p>
      ) : (
        thread.replies.map(reply => (
          <ReplyCard
            key={reply.id}
            author={reply.author}
            content={reply.content}
          />
        ))
      )}
    </div>
  );
}

export default ThreadPage;
