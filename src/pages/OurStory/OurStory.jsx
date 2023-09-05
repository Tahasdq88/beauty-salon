import React from "react";
import { motion } from "framer-motion";
import "./OurStory.css";
import MissionComponent from "../../components/StoryComponents/MissionComponet/MissionComponet";
import ProductSection from "../../components/StoryComponents/ProductComponet/ProductSection";
import SpaPolicySection from "../../components/StoryComponents/SpaPolicy/SpaPolicySection";
import AboutTeamSection from "../../components/StoryComponents/AboutTeam/AboutTeamSection";

const OurStory = () => {
  return (
    <div className="story-container">
      <MissionComponent />
      <ProductSection />
      <SpaPolicySection />
      <AboutTeamSection />
    </div>
  );
};

export default OurStory;
