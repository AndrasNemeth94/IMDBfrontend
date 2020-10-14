import React from "react";
import "./Home.css";
import translate from "../../i18n/messages/translate";

const Home = () => {
  return (
    <div className="home-container ">
      <p>{translate("hometext")}</p>
    </div>
  );
};
export default Home;
