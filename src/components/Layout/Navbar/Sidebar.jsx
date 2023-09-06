// Sidebar.js
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isNavOpen, toggleSidebar }) => {
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);
  const [showFacialDropdown, setShowFacialDropdown] = useState(false);
  const [showBodyTreatmentDropdown, setShowBodyTreatmentDropdown] = useState(false);


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
  const onNavtabClick = () => {
    toggleSidebar();
  };
  return (
    <div className={`sidebar ${isNavOpen ? "open" : ""}`} onMouseLeave={handleMouseLeave}>
      <div className="side-profile"></div>
      <div className="sidebar-content">
        <ul>
          <li
            className={
              currentPath === "/"
                ? "active-sidemenu sidebarMenuList"
                : "sidebarMenuList"
            }
          >
            <Link onClick={onNavtabClick} to="/">
              Home
            </Link>
          </li>
          <li
            className={
              currentPath === "/treatment"
                ? "active-sidemenu sidebarMenuList"
                : "sidebarMenuList"
            }
          >
            <Link to="/treatments/facial" onMouseEnter={handleTreatmentsHover} onClick={onNavtabClick} >
              Treatments
            </Link>
            {showTreatmentsDropdown && (
            <ul className="dropdown">
              <li>
                <Link to="/treatments/facial" >Facial</Link>
              </li>
              <li>
                <Link to="/treatments/body-treatment" >Body Treatment</Link>
              </li>
            </ul>
             )} 
          </li>
          <li
            className={
              currentPath === "/prices"
                ? "active-sidemenu sidebarMenuList"
                : "sidebarMenuList"
            }
          >
            <Link onClick={onNavtabClick} to="/prices">
              Prices
            </Link>
          </li>
          <li
            className={
              currentPath === "/story"
                ? "active-sidemenu sidebarMenuList"
                : "sidebarMenuList"
            }
          >
            <Link onClick={onNavtabClick} to="/story">
              Our Story
            </Link>
          </li>
          <li
            className={
              currentPath === "/contact"
                ? "active-sidemenu sidebarMenuList"
                : "sidebarMenuList"
            }
          >
            <Link onClick={onNavtabClick} to="/contact">
              Contact
            </Link>
          </li>
          <li
            className={
              currentPath === "/login"
                ? "active-sidemenu sidebarMenuList"
                : "sidebarMenuList"
            }
          >
            <Link onClick={onNavtabClick} to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="close-button" onClick={toggleSidebar}>
        <RxCross2 />
      </div>
    </div>
  );
};

export default Sidebar;
