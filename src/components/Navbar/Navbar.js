import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton/ToggleButton";

const Navigation = (props) => {
  return (
    <nav className="Navbar">
      <div>
        <ToggleButton click={props.toggleHandler} />
      </div>
      <Link to="/">
        <img
          className="logoimg"
          src={require("../../assets/img/LoMLM.png")}
          alt="logo"
          /*  style={{ width: "140px", height: "50px" }} */
        ></img>
      </Link>
      <div className="spacer"></div>
      <ul className="navLinks">
        <Link to="/" className="navLink">
          <li>HOME</li>
        </Link>
        <Link to="/Aboutus" className="navLink">
          <li>ABOUT US</li>
        </Link>
        <Link to="/Login" className="navLink">
          <li>LOG IN</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navigation;
