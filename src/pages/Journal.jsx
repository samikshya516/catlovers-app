import React, { useState } from "react";
import { mockPosts } from "../data/mockJournalPosts"; // This brings in your fake journal posts
import JournalCard from "../components/JournalCard"; // This brings in your JournalCard component
import JournalEntryForm from "../components/JournalEntryForm";
import Navbar from "../components/Navbar";


function Journal() {
  const [journalPosts, setJournalPosts] = useState(mockPosts);
  
  const [moodFilter, setMoodFilter] = useState("all");

  const filteredPosts =
    moodFilter === "all"
      ? journalPosts
      : journalPosts.filter((post) => post.mood === moodFilter);

  function handleDeletePost(idToDelete) {
    const updatedPosts = journalPosts.filter((post) => post.id !== idToDelete);
    setJournalPosts(updatedPosts);
  }

  function handleEditPost(updatedPost) {
  const updatedPosts = journalPosts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  setJournalPosts(updatedPosts);
}
const handleAddEntry = (newEntry) => {
  setJournalPosts((prevPosts) => [newEntry, ...prevPosts]);
};



return (
  <div>
    <Navbar />
    <div style={{ padding: "2rem" }}>
      <h1>Cat Journal</h1>

        {/* 📝 New Post Form */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Add a New Journal Post</h2>
          <JournalEntryForm onAdd={handleAddEntry} />
        </section>

        {/* 🎯 Mood Filter Buttons */}
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={() => setMoodFilter("all")}>All</button>
          <button onClick={() => setMoodFilter("playful")}>Playful</button>
          <button onClick={() => setMoodFilter("sleepy")}>Sleepy</button>
          <button onClick={() => setMoodFilter("anxious")}>Anxious</button>
        </div>

        {/* 📸 Journal Post Feed */}
        <section>
          <h2>Journal Feed</h2>
          {filteredPosts.map((post) => (
            <JournalCard
              key={post.id}
              catName={post.catName}
              image={post.image}
              story={post.story}
              mood={post.mood}
              timestamp={post.timestamp}
              onDelete={() => handleDeletePost(post.id)}
              onEdit={handleEditPost}
            />
          ))}
        </section>
      </div>
  </div>    
  );

}

export default Journal;