import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main-layout">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
