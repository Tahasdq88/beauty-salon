import React, { useState } from "react";
import "./SignupPage.css"; // Import your CSS file
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your authentication logic.
    // For simplicity, we'll just display the submitted values for now.
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="singup-container">
      <motion.div
        className="singup-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="singup-header">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="singup-form-group">
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
          <div className="singup-form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="singup-form-group">
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="singup-form-group">
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
          <button type="submit" className="singup-button">
          Sign Up
          </button>
          <div className="login_para">
            <p>Already have an account ?</p>
            <Link to="/Login">Login</Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupPage;
