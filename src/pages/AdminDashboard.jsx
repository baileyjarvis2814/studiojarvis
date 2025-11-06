import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1>Welcome, Admin 👋</h1>
      <p>You can manage your site here.</p>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "3rem" },
  button: { marginTop: "2rem", padding: "0.7rem 1.2rem", background: "#444", color: "white", border: "none", borderRadius: "5px" }
};
