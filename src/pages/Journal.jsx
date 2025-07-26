
import { mockPosts } from "../data/mockJournalPosts"; // This brings in your fake journal posts
import JournalCard from "../components/JournalCard"; // This brings in your JournalCard component

function Journal() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Cat Journal</h1>

      {/* 📸 Journal Post Feed */}
      <div>
      {mockPosts.map((post) => (
        <JournalCard
          key={post.id}
          catName={post.catName}
          image={post.image}
          story={post.story}
          mood={post.mood}
          timestamp={post.timestamp}
        />
      ))}
      </div>
    </div>
    );
}

export default Journal;