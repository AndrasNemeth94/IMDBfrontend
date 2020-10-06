import React from "react";
import "./Header.css";
import Navigation from "../../components/Navbar/Navbar";

const Header = (props) => {
  return (
    <div className="HeaderContainer">
      <Navigation toggleHandler={props.toggleClickHandler} />
    </div>
  );
};
export default Header;
