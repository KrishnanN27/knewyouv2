import heroImage from "../assets/home/hero/hero.jpg";
import logo from "../assets/home/hero/logo.png";
import "./Home.css";

export default function Home() {
  return (
    <>
<section
  id="home"
  className="home-hero"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="hero-overlay">
    <div className="hero-content">

      <img src={logo} alt="Knew You Logo" className="hero-logo" />

      <h1>
        The Heart Behind <br />
        <span>Knew You</span>
      </h1>

      <p className="hero-quote">
        We don’t create beauty — we uncover it. <br />
        We don’t perform identity — we return to it.
      </p>

      <p className="hero-author">Knew You</p>

      <div className="hero-cta">
        <a href="#services" className="primary-btn">
          Explore Our Services
        </a>

        <a href="#connect" className="secondary-btn">
          Connect With Us
        </a>
      </div>

    </div>
  </div>
</section>

      {/* Pillars Section */}
      <section className="pillars-section">
        <div className="pillars">
          <div className="pillar">
            <h3>Wise Beauty</h3>
            <p>Rooted in presence, care, and integrity</p>
          </div>

          <div className="pillar">
            <h3>Family First</h3>
            <p>Designed with families in mind</p>
          </div>

          <div className="pillar">
            <h3>Restorative Community</h3>
            <p>Supporting healing, growth, and meaningful connection</p>
          </div>
        </div>
      </section>
    </>
  );
}
