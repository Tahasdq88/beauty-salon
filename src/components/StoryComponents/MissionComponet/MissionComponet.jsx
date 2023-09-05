import React from "react";
import { motion } from "framer-motion";
import "./mission.css";

const MissionComponent = () => {
  return (
    <div className="mission-container">
      <motion.div
        className="mission-image-container"
        initial={{ opacity: 0, x: -50 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }} // Animation when component mounts
        transition={{ duration: 1 }} // Animation duration
      >
        <img src="/assets/images/hero.jpg" alt="Mission" />
      </motion.div>
      <motion.div
        className="mission-text-container"
        initial={{ opacity: 0, x: 50 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }} // Animation when component mounts
        transition={{ duration: 1 }} // Animation duration
      >
        <h2>Our Mission</h2>
        <p>
          We believe that intertwining slower rituals throughout your everyday
          routine is essential to your well-being. These slower moments allow
          your mind to find more calm, rest, and strength as you journey to find
          your truest self. Through our space, nail services, and massages, we
          hope to be an essential part of that journey in finding your truest
          you.
        </p>
      </motion.div>
    </div>
  );
};

export default MissionComponent;
