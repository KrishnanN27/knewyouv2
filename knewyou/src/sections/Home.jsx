import heroImage from "../assets/home/hero/hero.jpg";
import logo from "../assets/home/hero/logo.png";
import familyImg from "../assets/home/pillars/familyfirst.jpg";
import restoreImg from "../assets/home/pillars/resotoratice.jpg";
import wiseImg from "../assets/home/pillars/wisebeauty.PNG";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-container">
          <img src={logo} alt="Knew You Logo" className="intro-logo" />

          <div className="intro-text">
            <h2>A Family-Centered Beauty & Restoration Movement</h2>
            <p>
              Rooted in wisdom. Built for families. Designed to restore beauty,
              belonging, and wholeness — inside and out.
            </p>
          </div>
        </div>
      </section>
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

          <div
            className="pillar"
            style={{ backgroundImage: `url(${familyImg})` }}
          >
            <div className="pillar-content">
              <h3>Family First</h3>
              <p>Designed with families in mind.</p>
            </div>
          </div>

          <div
            className="pillar"
            style={{ backgroundImage: `url(${wiseImg})` }}
          >
            <div className="pillar-content">
              <h3>Wise Beauty</h3>
              <p>Rooted in presence, care and integrity.</p>
            </div>
          </div>

          <div
            className="pillar"
            style={{ backgroundImage: `url(${restoreImg})` }}
          >
            <div className="pillar-content">
              <h3>Restorative Community</h3>
              <p>Supporting healing, growth and meaningful connection.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
