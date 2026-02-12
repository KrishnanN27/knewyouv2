import "./Contact.css";

export default function Contact() {
  return (
    <section id="connect" className="contact-section">
      <div className="contact-overlay">
        <div className="contact-content">
          <h2>Connect With Us</h2>

          <p className="contact-intro">
            We would love to hear from you. Whether you're exploring services,
            partnership opportunities, or simply want to learn more —
            reach out.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required />
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
