import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./AboutTeam.css";

const AboutTeamSection = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-image-container"
        initial={{ opacity: 0, x: -50 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }} // Animation when component mounts
        transition={{ duration: 1 }} // Animation duration
      >
        <img src="/assets/images/facial_mask.jpg" alt="about" />
      </motion.div>
      <motion.div
        className="about-text-container"
        initial={{ opacity: 0, x: 50 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }} // Animation when component mounts
        transition={{ duration: 1 }} // Animation duration
      >
        <h2>About Our Team</h2>
        <p>
          Moshi is co-owned by Hector & Jina, two small business owners with a
          passion for creating a nail salon that values self-care, wellness, &
          community. Alongside their team of 13 passionate professionals, each
          member of the Moshi Team is here to help create a beautiful experience
          for you & our community.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutTeamSection;
