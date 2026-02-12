import founderImg from "../assets/founder/dp.png";
import "./Founder.css";

export default function Founder() {
  return (
    <section className="founder-section">

      <div className="founder-container">

        {/* Image */}
        <div className="founder-image">
          <img src={founderImg} alt="Founder Kalee" />
        </div>

        {/* Content */}
        <div className="founder-content">
          <h2>From the Founder</h2>

          <p>
            Kalee is a woman of strong faith with a sincere love for Jesus.
            Her spirit is steady, humble, and grounded in trust in God.
            Her kindness, actions, and devotion reflect a life anchored in
            wisdom and quiet strength.
          </p>

          <p>
            Knew You was born from surrender — from a deep desire to see women
            and families restored in beauty, belonging, and identity. What began
            as a personal calling has become a movement rooted in faith,
            restoration, and sacred remembering.
          </p>

          <a href="#connect" className="founder-cta">
            Learn how you can be part of the movement
          </a>
        </div>

      </div>

      {/* Testimonials */}
      <div className="founder-testimonials">
        <h3>What People Are Saying</h3>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              “Kalee is a woman of strong faith with a sincere love for Jesus.
              Her spirit is steady, humble, and grounded in trust in God.”
            </p>
          </div>

          <div className="testimonial-card">
            <p>
              “Her kindness and devotion create a space where you feel seen,
              supported, and spiritually strengthened.”
            </p>
          </div>

          <div className="testimonial-card">
            <p>
              “She carries wisdom with gentleness — and leads with grace.”
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
