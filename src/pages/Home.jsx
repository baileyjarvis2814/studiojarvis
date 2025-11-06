export default function Home() {
    return (
      <section style={styles.hero}>
        <div style={styles.content}>
          <h1 style={styles.title}>Studio Jarvis</h1>
          <p style={styles.subtitle}>Voice that brings stories to life.</p>
          <a href="/demos" style={styles.cta}>Listen to Reels</a>
        </div>
      </section>
    );
  }
  
  const styles = {
    hero: {
      height: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)",
    },
    content: { maxWidth: "600px", padding: "2rem" },
    title: { fontSize: "3rem", color: "var(--color-accent)" },
    subtitle: { fontSize: "1.2rem", margin: "1rem 0 2rem" },
    cta: {
      display: "inline-block",
      background: "var(--color-accent)",
      color: "#111",
      padding: "0.8rem 1.6rem",
      borderRadius: "30px",
      fontWeight: "600",
    },
  };
  