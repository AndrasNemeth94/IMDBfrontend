import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ToggleButton from "../Navbar/ToggleButton/ToggleButton";
import translate from "../../i18n/messages/translate";

const Navigation = ({ toggleHandler, onClickLang }) => {
  const hunPic = "hu-ic.png";
  const enPic = "en-ic.png";
  const [flagIMG, setFlagIMG] = useState(hunPic);

  const switchImage = () => {
    let img = hunPic;
    if (flagIMG === hunPic) {
      img = enPic;
    } else {
      img = hunPic;
    }
    setFlagIMG(img);
  };
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
      <button
        className="set-lang"
        onClick={(event) => {
          onClickLang();
          switchImage();
        }}
      >
        <img
          className="flag"
          src={require(`../../assets/img/${flagIMG}`)}
          alt="flag"
        />
      </button>
      <div className="nav-spacer "></div>
      <ul className="nav-links">
        <Link to="/" className="nav-link">
          <li className="nav-link-element">{translate("Home")}</li>
        </Link>
        <Link to="/Aboutus" className="nav-link">
          <li className="nav-link-element">{translate("About")}</li>
        </Link>
        <Link to="/Login" className="nav-link">
          <li className="nav-link-element">{translate("Login")}</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navigation;
