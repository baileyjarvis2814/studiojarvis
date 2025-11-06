import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navContainer = {
    background: "rgba(20, 20, 20, 0.9)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const navContent = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const linkContainer = {
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    gap: "1rem",
    textAlign: "center",
    padding: "1rem 0",
    background: "rgba(20, 20, 20, 0.95)",
  };

  const desktopLinks = {
    display: "flex",
    gap: "2rem",
  };

  const linkStyle = {
    color: "var(--color-text)",
    textDecoration: "none",
    fontWeight: "600",
    letterSpacing: "0.5px",
  };

  const iconButton = {
    background: "none",
    border: "none",
    color: "var(--color-text)",
    cursor: "pointer",
    display: "none", // hidden on desktop
  };

  return (
    <nav style={navContainer}>
      <div style={navContent}>
        <h2 style={{ color: "var(--color-accent)" }}>StudioJarvis</h2>

        {/* Desktop Links */}
        <div style={{ ...desktopLinks, ...(window.innerWidth <= 768 ? { display: "none" } : {}) }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/demos" style={linkStyle}>Demos</Link>
          <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          style={{
            ...iconButton,
            display: window.innerWidth <= 768 ? "block" : "none",
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && window.innerWidth <= 768 && (
        <div style={linkContainer}>
          <Link to="/" style={linkStyle} onClick={toggleMenu}>Home</Link>
          <Link to="/demos" style={linkStyle} onClick={toggleMenu}>Demos</Link>
          <Link to="/portfolio" style={linkStyle} onClick={toggleMenu}>Portfolio</Link>
          <Link to="/about" style={linkStyle} onClick={toggleMenu}>About</Link>
          <Link to="/contact" style={linkStyle} onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
