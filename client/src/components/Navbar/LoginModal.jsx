import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null; // hide if closed

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
    setUsername("");
    setPassword("");
    onClose();
  };

  // Inline styles
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      width: "350px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    title: {
      marginBottom: "20px",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#009dff", // blue from logo
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      fontSize: "15px",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#7e1f86", // purple from logo
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#f89c1c", // orange hover
    },
    closeBtn: {
      marginTop: "10px",
      background: "none",
      border: "none",
      color: "#009dff",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Log in
          </button>
        </form>
        <button style={styles.closeBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
