// Navbar.js
import React, { useEffect, useState } from "react";
import "./navbar.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function Navbar() {
  // Get the current URL pathname

  const [isMobileView, setisMobileView] = useState(window.innerWidth > 820);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  //dropdown
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);
  const [showFacialDropdown, setShowFacialDropdown] = useState(false);
  const [showBodyTreatmentDropdown, setShowBodyTreatmentDropdown] =
    useState(false);

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
  useEffect(() => {}, []);
  const toggleSidebar = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  // drop down
  const handleTreatmentsHover = () => {
    setShowTreatmentsDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowTreatmentsDropdown(false);
    setShowFacialDropdown(false);
    setShowBodyTreatmentDropdown(false);
  };

  const currentPath = window.location.pathname;

  const handleLogout = () => {
    logout();
  };

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

      <div
        className={`navbar-links ${isMobileView ? "d-none" : ""}`}
      >
        <ul>
          <li>
            <Link to="/" className={currentPath === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li className="dropdown-container"  onMouseLeave={handleMouseLeave}>
            <Link
              onMouseEnter={handleTreatmentsHover}
             
              className={currentPath.includes("treatments") ? "active" : ""}
            >
              Treatments
            </Link>
            {showTreatmentsDropdown && (
              <ul className={`dropdown ${showTreatmentsDropdown ? 'show' : ''}`}>
                <li>
                  <Link to="/treatments/facial">FACIAL</Link>
                </li>
                <li>
                  <Link to="/treatments/body-treatment">BODY TREATMENT</Link>
                </li>
              </ul>
             )}
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
            {isAuthenticated ? (
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              <Link
                to="/login"
                className={currentPath === "/login" ? "active" : ""}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
