import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <section>
        <h2>Daily Affirmation</h2>
        {/* Placeholder for now */}
        <p>“Affirmation will go here”</p>
      </section>

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

