// Sidebar.js
import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isNavOpen, toggleSidebar }) => {
  const currentPath = window.location.pathname;
  const onNavtabClick = () => {
    toggleSidebar();
  };
  return (
    <div className={`sidebar ${isNavOpen ? "open" : ""}`}>
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
              currentPath === "/treatments"
                ? "active-sidemenu sidebarMenuList"
                : "sidebarMenuList"
            }
          >
            <Link onClick={onNavtabClick} to="/treatments">
              Treatments
            </Link>
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
