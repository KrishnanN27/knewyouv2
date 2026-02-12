import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Mobile Toggle */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links */}
        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>

          <a
            href="#connect"
            className="connect-button"
            onClick={() => setMobileMenuOpen(false)}
          >
            Connect
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
