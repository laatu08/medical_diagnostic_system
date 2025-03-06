import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Medical Diagnostic System. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "white",
    color: "black",
    position: "fixed",
    width: "100%",
    bottom: "0",
    fontSize: "1.1rem",
  },
};

export default Footer;
