import HeroSection from "../components/HeroSection"; 
import Navbar from "../components/Navbar";
import DailyAffirmation from "../components/DailyAffirmation";
import CommunityStats from "../components/CommunityStats";
import GetStartedCTA from "../components/GetStartedCTA";


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DailyAffirmation />
      <CommunityStats />
      <GetStartedCTA /> 
    </div>
  );
}

export default Home;

