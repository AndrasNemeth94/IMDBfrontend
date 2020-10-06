import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => (
  <nav className="SideDrawerContainer">
    <ul className="navLinksMobile">
      <Link to="/" className="navLinkMobile">
        <li>HOME</li>
      </Link>
      <Link to="/Aboutus" className="navLinkMobile">
        <li>ABOUT US</li>
      </Link>
      <Link to="/Login" className="navLinkMobile">
        <li>LOG IN</li>
      </Link>
    </ul>
  </nav>
);
export default SideDrawer;
