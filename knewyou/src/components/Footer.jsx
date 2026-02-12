function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h3>Knew You</h3>
          <p className="footer-tagline">
            Built With Wisdom. Rooted in Restoration.
          </p>
        </div>

        <div className="footer-links">
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="footer-newsletter">
          <p>Stay rooted and inspired.</p>
          <button className="newsletter-btn">
            Join the Newsletter
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
