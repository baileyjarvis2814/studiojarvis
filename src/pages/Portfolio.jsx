export default function Portfolio() {
    const works = [
      { title: "Game Trailer - Eclipse", role: "Narration", year: 2024 },
      { title: "Ad Campaign - Nova Energy", role: "Commercial VO", year: 2023 },
      { title: "Indie Animation - The Wanderer", role: "Character Voice", year: 2022 },
    ];
  
    return (
      <section style={styles.container}>
        <h1 style={styles.title}>Selected Works</h1>
        <div style={styles.list}>
          {works.map((work) => (
            <div key={work.title} style={styles.item}>
              <h2 style={styles.itemTitle}>{work.title}</h2>
              <p>{work.role} • {work.year}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  const styles = {
    container: {
      padding: "4rem 2rem",
      background: "linear-gradient(135deg, #1e1e1e 0%, #252525 100%)",
      textAlign: "center",
    },
    title: {
      color: "var(--color-accent)",
      fontSize: "2.5rem",
      marginBottom: "2rem",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
    },
    item: {
      background: "#222",
      padding: "1.5rem 2rem",
      borderRadius: "10px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
      width: "90%",
      maxWidth: "600px",
    },
    itemTitle: {
      color: "var(--color-highlight)",
      marginBottom: "0.5rem",
    },
  };
  