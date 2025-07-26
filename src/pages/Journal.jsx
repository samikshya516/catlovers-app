
import { mockPosts } from "../data/mockJournalPosts"; // This brings in your fake journal posts
import JournalCard from "../components/JournalCard"; // This brings in your JournalCard component
import React, { useState } from "react";



function Journal() {
  const [journalPosts, setJournalPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState({
    catName: "",
    story: "",
    mood: "playful",
    image: "",
  });
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


  return (
  <div style={{ padding: "2rem" }}>
    <h1>Cat Journal</h1>

    {/* 📝 New Post Form */}
    <section style={{ marginBottom: "2rem" }}>
      <h2>Add a New Journal Post</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const postWithId = {
            ...newPost,
            id: Date.now(),
            timestamp: new Date().toISOString().split("T")[0],
          };
          setJournalPosts([postWithId, ...journalPosts]);
          setNewPost({
            catName: "",
            story: "",
            mood: "playful",
            image: "",
          });
        }}
      >
        <input
          type="text"
          placeholder="Cat Name"
          value={newPost.catName}
          onChange={(e) =>
            setNewPost({ ...newPost, catName: e.target.value })
          }
          style={{ display: "block", marginBottom: "0.5rem" }}
        />

        <textarea
          placeholder="Story"
          value={newPost.story}
          onChange={(e) =>
            setNewPost({ ...newPost, story: e.target.value })
          }
          style={{ display: "block", marginBottom: "0.5rem" }}
        />

        <select
          value={newPost.mood}
          onChange={(e) =>
            setNewPost({ ...newPost, mood: e.target.value })
          }
          style={{ display: "block", marginBottom: "0.5rem" }}
        >
          <option value="playful">Playful</option>
          <option value="sleepy">Sleepy</option>
          <option value="anxious">Anxious</option>
        </select>

        <input
          type="text"
          placeholder="Image URL"
          value={newPost.image}
          onChange={(e) =>
            setNewPost({ ...newPost, image: e.target.value })
          }
          style={{ display: "block", marginBottom: "0.5rem" }}
        />

        <button type="submit">Add Post</button>
      </form>
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
);

}

export default Journal;