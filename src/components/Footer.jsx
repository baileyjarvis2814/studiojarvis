export default function Footer() {
    const style = {
      background: "rgba(20,20,20,0.9)",
      color: "var(--color-text)",
      textAlign: "center",
      padding: "1rem",
      fontSize: "0.9rem",
      borderTop: "1px solid rgba(255,255,255,0.1)"
    };
  
    return (
      <footer style={style}>
        <p>© {new Date().getFullYear()} Studio Jarvis — Crafted with React</p>
      </footer>
    );
  }
  