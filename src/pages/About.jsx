export default function About() {
    return (
      <section style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>About Jarvis Bailey</h1>
          <p style={styles.text}>
            I’m a voice actor with a passion for storytelling and sound design.
            From dynamic commercial reads to immersive character performances,
            my goal is to bring emotion, clarity, and authenticity to every project.
          </p>
  
          <p style={styles.text}>
            When I’m not behind the mic, I’m coding, creating, and collaborating—
            blending creativity with technology to deliver unique performances
            that resonate with audiences.
          </p>
  
          <p style={styles.quote}>
            <em>"Voice is more than sound — it’s connection."</em>
          </p>
        </div>
      </section>
    );
  }
  
  const styles = {
    container: {
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1e1e1e 0%, #252525 100%)",
      padding: "2rem",
    },
    content: {
      maxWidth: "800px",
      textAlign: "center",
      lineHeight: "1.8",
    },
    title: {
      fontSize: "2.5rem",
      color: "var(--color-accent)",
      marginBottom: "1.5rem",
    },
    text: {
      marginBottom: "1rem",
    },
    quote: {
      marginTop: "2rem",
      color: "var(--color-highlight)",
    },
  };
  