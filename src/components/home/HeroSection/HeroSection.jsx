// Hero.js
import React, { useEffect } from "react";
import "./HeroSection.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Define animation properties
  const animationVariants = {
    hidden: { y: "50", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="hero">
      <div className="overlay" ref={ref}></div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={animationVariants}
        className="hero-content"
      >
        <h1>Creating a more thoughtful nail experience.</h1>
        <p>
          LEO is a nail salon that encourages slower rituals within your regular
          daily routine. We believe in the power of self-care & hope to provide
          you the space & service to help you connect with your truest self.
        </p>
        <button>Book Now</button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
