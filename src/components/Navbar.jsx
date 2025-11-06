import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#222", padding: "1rem" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/demos" style={{ color: "white", textDecoration: "none" }}>Demos</Link></li>
        <li><Link to="/portfolio" style={{ color: "white", textDecoration: "none" }}>Portfolio</Link></li>
        <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}
