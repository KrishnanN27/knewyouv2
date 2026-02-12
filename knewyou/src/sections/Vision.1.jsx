import visionImage from "../assets/vision/vision.PNG";
import "./Vision.css";

export default function Vision() {
  return (
    <section id="vision" className="vision-section">

      {/* Top Visual Intro */}
      <div
        className="vision-hero"
        style={{ backgroundImage: `url(${visionImage})` }}
        role="img"
        aria-label="Vision hero image"
      >
        <div className="vision-overlay">
          <div className="vision-hero-content">
            <h2>Core Mission & Values</h2>
            <p className="vision-statement">
              "Knew You is a movement of restoration — redefining beauty,
              rebuilding belonging, and renewing identity in God."
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="vision-container">

        {/* Mission Pillars */}
        <div className="vision-pillars">

          <div className="pillar-card">
            <div className="pillar-icon" aria-hidden="true">✧</div>
            <h3>Beauty as Reflection of Wisdom</h3>
            <p>Where outer expression mirrors inner truth.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon" aria-hidden="true">♡</div>
            <h3>Family-Centered Support</h3>
            <p>Rooted in belonging, nurtured in love.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon" aria-hidden="true">✺</div>
            <h3>Wholeness Inside + Out</h3>
            <p>Healing that touches spirit, body, and soul.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon" aria-hidden="true">✝</div>
            <h3>Faith-Driven Living</h3>
            <p>Guided by wisdom. Anchored in truth.</p>
          </div>

        </div>


        {/* What We Stand For */}
        <div className="vision-stand">
          <h3>What We Stand For</h3>
          <ul>
            <li>Restoration of women and families</li>
            <li>Spirit-led community care</li>
            <li>Biblical wisdom ('chakam'), relational knowing ('yada')</li>
          </ul>
        </div>

        {/* Heart Behind */}
        <div className="vision-heart">
          <h3>The Heart Behind Knew You</h3>

          <p>
            At the center of Knew You is a call to restore what the world has
            distorted: beauty, identity, and belonging. This ministry was born
            from a place of deep surrender and sacred remembering—where beauty
            is not something to chase, but something to come home to.
          </p>

          <p>
            We believe God is raising up a generation that is not just polished,
            but planted. Not just outwardly refined, but inwardly renewed.
          </p>

          <p>
            Our heart is to invite women and families into a space where they
            can experience restoration in spirit, body, and soul. Where image
            is not about comparison, but about reflection—the image of God made
            visible through healed hearts and wise beauty.
          </p>

          <p>
            Whether through touch, teaching, testimony, or togetherness,
            everything we offer is an act of worship—reflecting Heaven's design
            in real time. This isn't just about personal transformation.
            It's about rebuilding a culture of connection, presence, and
            divine identity in community.
          </p>
        </div>

        {/* Quote Callout */}
        <div className="vision-quote">
          <blockquote>
            "We don't create beauty—we uncover it.<br />
            We don't perform identity—we return to it."
          </blockquote>
          <span>— Knew You</span>
        </div>

      </div>
    </section>
  );
}
