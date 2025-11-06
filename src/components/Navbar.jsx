import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    background: "rgba(20, 20, 20, 0.9)",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
  };

  const linkStyle = {
    color: "var(--color-text)",
    textDecoration: "none",
    fontWeight: "600",
    letterSpacing: "0.5px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/demos" style={linkStyle}>Demos</Link>
      <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}
