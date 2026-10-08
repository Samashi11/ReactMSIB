const LoginForm = () => {
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      maxWidth: "300px",
      margin: "auto",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
    },
  };
  return (
    <form style={styles.form}>
      <input type="text" placeholder="Username" style={styles.input} />
      <input type="text" placeholder="Email" style={styles.input} />
      <input type="password" placeholder="Password" style={styles.input} />
      <button style={styles.button}>Login</button>
    </form>
  );
};

export default LoginForm;
