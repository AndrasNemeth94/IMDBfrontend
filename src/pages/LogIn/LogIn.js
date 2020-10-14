import React from "react";
import "../home/Home.css";
import translate from "../../i18n/messages/translate";

function LogIn() {
  return (
    <div className="home-container">
      <p>{translate("logintext")}</p>
    </div>
  );
}
export default LogIn;
