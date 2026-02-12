import "./Contact.css";

export default function Contact() {
  return (
    <section id="connect" className="contact-section">
      <div className="contact-container">

        <div className="contact-left">
          <h2>Connect With Us</h2>
          <p>
            We would love to hear from you. Whether you're exploring services,
            partnership opportunities, or simply want to learn more about our
            movement — reach out.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> hello@yourbrand.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Location:</strong> Your City, State</p>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="form-group">
              <textarea rows="5" placeholder="Your Message"></textarea>
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
