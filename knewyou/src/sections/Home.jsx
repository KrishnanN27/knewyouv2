import heroImage from "../assets/home/hero.jpg";
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
            <h1>
              A Family-Centered Beauty & Restoration Movement
            </h1>

            <p>
              Rooted in wisdom. Built for families. Designed to restore beauty,
              belonging, and wholeness — inside and out.
            </p>

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
