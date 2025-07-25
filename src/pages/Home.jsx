import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DailyAffirmation from "../components/DailyAffirmation";


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <DailyAffirmation />


      <section>
        <h2>Community Stats</h2>
        {/* Placeholder for now */}
        <p>Total Cats: ___</p>
        <p>Journal Posts: ___</p>
      </section>

      <section>
        <button>Get Started</button>
      </section>
    </div>
  );
}

export default Home;

