import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => (
  <div className="BackdropContainer" onClick={props.click} />
);
export default Backdrop;
