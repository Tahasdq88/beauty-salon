import React from "react";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
// import HeroSection from "../../components/home/HeroSection/HeroSection";
import Socialmedia from "../../components/Home/Socialmedia/Socialmedia";
import Services from "../../components/Home/Services/Services";
import Quote from "../../components/Home/Quote/QuoteComponents";

const HomePage = () => {
  return (
    <>
      
      <HeroSection />
      <Services />
      <Quote />
      <Socialmedia />
    </>
  );
};

export default HomePage;
