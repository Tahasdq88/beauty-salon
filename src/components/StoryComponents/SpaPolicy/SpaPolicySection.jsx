import React from "react";
import { motion } from "framer-motion";
import "./SpaPolicy.css";
const SpaPolicySection = () => {
  return (
    <div className="spa-section">
      <motion.div
        className="spa-image"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/assets/images/hero.jpg"
          alt="spa Image"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
      <motion.div
        className="spa-content"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>SPA policy</h2>
        <p>
          Our policies have been created to honor and respect each guest’s
          experience, our space, and our team of professionals. Please take a
          moment to read through our policies before we welcome you into our
          space.
        </p>
        <p>
          Keeping you, our team, and our community safe is our top priority. We
          have put together thoughtful measures that meet or exceed the
          guidelines put forth by the CDC & The Board of Cosmetology.{" "}
        </p>
      </motion.div>
    </div>
  );
};

export default SpaPolicySection;
