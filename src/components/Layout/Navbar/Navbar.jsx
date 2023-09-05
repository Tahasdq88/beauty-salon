// Navbar.js
import React, { useEffect, useState } from "react";
import "./navbar.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
function Navbar() {
  // Get the current URL pathname

  const [isMobileView, setisMobileView] = useState(window.innerWidth > 820);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 820) {
      setisMobileView(false);
    } else {
      setisMobileView(true);
    }

    const updateMedia = () => {
      if (window.innerWidth > 820) {
        setisMobileView(false);
      } else {
        setisMobileView(true);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const toggleSidebar = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };
  const currentPath = window.location.pathname;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/assets/images/logo.jpeg" alt="Moshi_SPA" />
        </Link>
      </div>
      <button
        className={`${
          isMobileView ? (isNavOpen ? "d-none" : "") : "d-none"
        } menu-button`}
        onClick={toggleSidebar}
      >
        ☰
      </button>
      {/* side navbar */}
      <Sidebar isNavOpen={isNavOpen} toggleSidebar={toggleSidebar} />

      <div className={`navbar-links ${isMobileView ? "d-none" : ""}`}>
        <ul>
          <li>
            <Link to="/" className={currentPath === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/treatments"
              className={currentPath === "/treatments" ? "active" : ""}
            >
              Treatments
            </Link>
          </li>
          <li>
            <Link
              to="/prices"
              className={currentPath === "/prices" ? "active" : ""}
            >
              Prices
            </Link>
          </li>
          <li>
            <Link
              to="/story"
              className={currentPath === "/story" ? "active" : ""}
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={currentPath === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={currentPath === "/login" ? "active" : ""}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
