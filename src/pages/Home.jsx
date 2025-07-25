import HeroSection from "../components/HeroSection"; 
import Navbar from "../components/Navbar";
import DailyAffirmation from "../components/DailyAffirmation";

import GetStartedCTA from "../components/GetStartedCTA";



function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DailyAffirmation />
      
      <GetStartedCTA />
    </div>
  );
}

export default Home;

