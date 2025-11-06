export default function Contact() {
    return (
      <section style={styles.container}>
        <h1 style={styles.title}>Let’s Collaborate</h1>
        <p style={styles.text}>
          Have a project in mind or need a voice for your next production?
          Send me a message — I’d love to connect!
        </p>
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required style={styles.input} />
          <input type="email" placeholder="Your Email" required style={styles.input} />
          <textarea placeholder="Your Message" required style={styles.textarea} />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </section>
    );
  }
  
  const styles = {
    container: {
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)",
      padding: "3rem 2rem",
      textAlign: "center",
    },
    title: {
      color: "var(--color-accent)",
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    text: {
      maxWidth: "600px",
      marginBottom: "2rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "100%",
      maxWidth: "400px",
    },
    input: {
      padding: "0.8rem",
      borderRadius: "8px",
      border: "1px solid #444",
      background: "#222",
      color: "var(--color-text)",
    },
    textarea: {
      padding: "0.8rem",
      borderRadius: "8px",
      border: "1px solid #444",
      background: "#222",
      color: "var(--color-text)",
      minHeight: "120px",
    },
    button: {
      background: "var(--color-accent)",
      border: "none",
      borderRadius: "8px",
      padding: "0.8rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };
  