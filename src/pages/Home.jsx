import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DailyAffirmation from "../components/DailyAffirmation";
import CommunityStats from "../components/CommunityStats";
import GetStartedCTA from "../components/GetStartedCTA";



function Home() {
  return (
    <div>
      <Navbar />


      <HeroSection />


      <GetStartedCTA />


      <DailyAffirmation />


      <CommunityStats />


      <section>
        <button>Get Started</button>
      </section>
    </div>
  );
}

export default Home;

