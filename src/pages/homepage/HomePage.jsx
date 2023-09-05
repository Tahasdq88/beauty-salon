import React from "react";
import Navbar from "../../components/Layout/Navbar/Navbar";
import Services from "../../components/Home/Services/Services";
import Quote from "../../components/Home/Quote/Quote";
import Socialmedia from "../../components/Home/Socialmedia/Socialmedia";
const HomePage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Services/>
      <Quote/>
      <Socialmedia/>
    </>
  );
};

export default HomePage;
