import React from "react";
import "./Header.css";
import Navigation from "../../components/Navbar/Navbar";

const Header = ({ toggleClickHandler }) => {
  return (
    <div className="header-container">
      <Navigation toggleHandler={toggleClickHandler} />
    </div>
  );
};
export default Header;
