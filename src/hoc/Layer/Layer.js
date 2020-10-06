import React, { Component } from "react";
import "./Layer.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/home/Home";
import AboutUs from "../../pages/aboutus/AboutUs";
import LogIn from "../../pages/LogIn/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideDrawer from "../../components/Navbar/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";

class Layer extends Component {
  state = {
    sideDrawerOpen: false,
  };
  toggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div className="LayerContainer">
          {sideDrawer}
          {backdrop}

          <Header toggleClickHandler={this.toggleClickHandler} />
          <Switch>
            <React.Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/Aboutus" component={AboutUs} />
              <Route path="/Login" component={LogIn} />
            </React.Fragment>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}
export default Layer;
