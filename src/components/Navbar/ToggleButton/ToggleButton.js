import React from "react";
import "./ToggleButton.css";

const ToggleButton = (props) => (
  <button onClick={props.click} className="ToggleButtonContainer">
    <div className="separator" />
    <div className="separator2" />
  </button>
);
export default ToggleButton;
