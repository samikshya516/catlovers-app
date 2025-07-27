import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import DailyAffirmation from "../components/DailyAffirmation";
import CommunityStats from "../components/CommunityStats";
import GetStartedCTA from "../components/GetStartedCTA";
import MoodTracker from "../components/MoodTracker";
import JournalFeed from "../components/JournalFeed";
import { journalEntries } from "../data/mockdata";






function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem", padding: "1rem" }}>
        {/* Main Content */}
        <div style={{ flex: 2 }}>
          <HeroSection />
          <CommunityStats />
          <GetStartedCTA />
          <JournalFeed journalEntries={journalEntries} />
        </div>

  


        {/* Sidebar */}
        <aside
          style={{
            flex: 1,
            backgroundColor: "#f9f9f9",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <DailyAffirmation />
          <MoodTracker />
        </aside>
      </div>
    </div>
  );
}

export default Home;