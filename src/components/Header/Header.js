import React from "react";
import "./Header.css";
import Navigation from "../../components/Navbar/Navbar";

const Header = ({ toggleClickHandler, clickChangeLang }) => {
  return (
    <div className="header-container">
      <Navigation
        toggleHandler={toggleClickHandler}
        onClickLang={clickChangeLang}
      />
    </div>
  );
};
export default Header;
