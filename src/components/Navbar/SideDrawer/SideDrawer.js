import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => (
  <nav className="sidedrawer-container">
    <ul className="sidedrawer-mobile-links">
      <Link to="/" className="sidedrawer-mobile-link">
        <li>HOME</li>
      </Link>
      <Link to="/Aboutus" className="sidedrawer-mobile-link">
        <li>ABOUT US</li>
      </Link>
      <Link to="/Login" className="sidedrawer-mobile-link">
        <li>LOG IN</li>
      </Link>
    </ul>
  </nav>
);
export default SideDrawer;
