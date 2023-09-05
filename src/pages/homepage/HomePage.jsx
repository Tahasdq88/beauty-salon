import React from "react";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import Socialmedia from "../../components/home/Socialmedia/Socialmedia";
import Services from "../../components/home/Services/Services";
import Quote from "../../components/home/Quote/QuoteComponents";

const HomePage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection />
      <Services />
      <Quote />
      <Socialmedia />
    </>
  );
};

export default HomePage;
