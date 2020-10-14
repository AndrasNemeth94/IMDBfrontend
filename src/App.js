import React, { useState } from "react";
import { I18nProvider, LOCALES } from "./i18n";

import routes from "../src/routes/Routes";
import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideDrawer from "../src/components/Navbar/SideDrawer/SideDrawer";
import Backdrop from "../src/components/Backdrop/Backdrop";

const App = () => {
  let backdrop;
  let sideDrawer;
  let sideDrawerState = false;
  const [localeSetting, setLocaleSetting] = useState(LOCALES.HUNGARIAN);

  const [sideDrawerOpen, setsideDrawerOpen] = useState(sideDrawerState);

  const backdropClickHandler = () => {
    setsideDrawerOpen(false);
  };

  const sideDrawerChanger = () => {
    setsideDrawerOpen((prevDrawer) => !prevDrawer.sideDrawerOpen);
  };
  const clickOnSetting = () => {
    let lang;

    if (localeSetting === LOCALES.HUNGARIAN) {
      lang = LOCALES.ENGLISH;
    } else {
      lang = LOCALES.HUNGARIAN;
    }
    setLocaleSetting(lang);
  };

  if (sideDrawerOpen === true) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop backdropClick={backdropClickHandler} />;
  }
  return (
    <div className="App">
      <I18nProvider locale={localeSetting}>
        <div className="app-container">
          <Router>
            <div className="layer-container">
              {sideDrawer}
              {backdrop}

              <Header
                toggleClickHandler={sideDrawerChanger}
                clickChangeLang={clickOnSetting}
              />

              <Switch>
                <React.Fragment>
                  {routes.map((el) => {
                    return (
                      <Route
                        key={routes.indexOf(el)}
                        path={el.path}
                        exact
                        component={el.component}
                      />
                    );
                  })}
                </React.Fragment>
              </Switch>

              <Footer />
            </div>
          </Router>
        </div>
      </I18nProvider>
    </div>
  );
};

export default App;
