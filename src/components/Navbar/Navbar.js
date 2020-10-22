import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton/ToggleButton";
import SearchBar from "../Navbar/Searchbar/SearchBar";

const Navigation = ({ toggleHandler }) => {
  return (
    <nav className="navbar">
      <div>
        <ToggleButton click={toggleHandler} />
      </div>
      <Link to="/">
        <img
          className="nav-logo"
          src={require("../../assets/img/LoMLM.png")}
          alt="logo"
        ></img>
      </Link>
      <div className="nav-spacer ">
        <SearchBar />
      </div>
      <ul className="nav-links">
        <Link to="/" className="nav-link">
          <li>HOME</li>
        </Link>
        <Link to="/Aboutus" className="nav-link">
          <li>ABOUT US</li>
        </Link>
        <Link to="/Login" className="nav-link">
          <li>LOG IN</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navigation;
