export default function Demos() {
    const demos = [
      { title: "Commercial Demo", file: "/audio/commercial.mp3" },
      { title: "Character Demo", file: "/audio/character.mp3" },
      { title: "Narration Demo", file: "/audio/narration.mp3" },
    ];
  
    return (
      <section style={styles.container}>
        <h1 style={styles.title}>Demo Reels</h1>
        <div style={styles.grid}>
          {demos.map((demo) => (
            <div key={demo.title} style={styles.card}>
              <h2 style={styles.cardTitle}>{demo.title}</h2>
              <audio controls style={styles.audio}>
                <source src={demo.file} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  const styles = {
    container: {
      padding: "4rem 2rem",
      textAlign: "center",
      background: "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)",
    },
    title: {
      color: "var(--color-accent)",
      marginBottom: "2rem",
      fontSize: "2.5rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
    },
    card: {
      background: "#222",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    },
    cardTitle: {
      marginBottom: "1rem",
      color: "var(--color-highlight)",
    },
    audio: {
      width: "100%",
    },
  };
  