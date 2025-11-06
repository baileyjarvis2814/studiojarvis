import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    const adminPassword = " ";

    if (password === adminPassword) {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "3rem" },
  form: { display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px", margin: "auto" },
  input: { padding: "0.5rem", borderRadius: "5px", border: "1px solid #444" },
  button: { backgroundColor: "#444", color: "white", padding: "0.6rem", border: "none", cursor: "pointer" },
  error: { color: "tomato" },
};
