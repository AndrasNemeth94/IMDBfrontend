import React from "react";
import "../home/Home.css";
import translate from "../../i18n/messages/translate";

function AboutUs() {
  return (
    <div className="home-container">
      <p>{translate("abouttext")}</p>
    </div>
  );
}
export default AboutUs;
