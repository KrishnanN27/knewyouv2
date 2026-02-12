import { useEffect, useState } from 'react';
import logo from "../assets/logo/logo.png";
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#vision">Vision</a>
          <a href="#services">Services</a>
          {/* <a href="#community">Community</a> */}
          {/* <a href="#events">Events</a> */}
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
