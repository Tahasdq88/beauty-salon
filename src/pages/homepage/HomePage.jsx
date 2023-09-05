import React from "react";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import Services from "../../components/Home/Services/Services";
import Quote from "../../components/Home/Quote/Quote";
import Socialmedia from "../../components/Home/Socialmedia/Socialmedia";
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
