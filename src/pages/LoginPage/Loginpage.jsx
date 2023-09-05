import React, { useState } from "react";
import "./Loginpage.css"; // Import your CSS file
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your authentication logic.
    // For simplicity, we'll just display the submitted values for now.
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="login-header">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="signup_para">
            <p>Don't have an account ?</p>
            <Link to="/Signup">Sign up</Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Loginpage;
