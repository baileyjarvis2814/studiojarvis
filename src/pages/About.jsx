import { motion } from "framer-motion";

export default function About() {
  return (
    <section style={styles.container}>
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Jarvis Bailey
        </motion.h1>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I’m a voice actor with a passion for storytelling and sound design.
          From dynamic commercial reads to immersive character performances,
          my goal is to bring emotion, clarity, and authenticity to every project.
        </motion.p>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          When I’m not behind the mic, I’m coding, creating, and collaborating—
          blending creativity with technology to deliver unique performances
          that resonate with audiences.
        </motion.p>

        <motion.p
          style={styles.quote}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <em>"Voice is more than sound — it’s connection."</em>
        </motion.p>
      </motion.div>
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
