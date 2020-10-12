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
import moviesJSON from "../../dummyDB/movies.json";
import genreJSON from "../../dummyDB/genre.json";
import seriesJSON from "../../dummyDB/series.json";

class Layer extends Component {
  state = {
    Genres: [],
    Series: [],
    Movies: [],
    searchedId: null,
    sideDrawerOpen: false,
  };
  routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Aboutus",
      component: AboutUs,
    },
    {
      path: "/Login",
      component: LogIn,
    },
  ];
  componentDidMount() {
    let getMovies;
    let getGenres;
    let getSeries;
    getMovies = moviesJSON.map((movie) => {
      return movie;
    });
    getSeries = seriesJSON.map((series) => {
      return series;
    });
    getGenres = genreJSON.map((genre) => {
      return genre;
    });

    this.setState({
      Movies: getMovies,
      Series: getSeries,
      Genres: getGenres,
    });
  }

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
      backdrop = <Backdrop backdropClick={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div className="layer-container">
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
