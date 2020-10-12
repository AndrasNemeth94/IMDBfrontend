import React, { Component } from "react";
import "./Home.css";
import Movie from "../../components/Movie/Movie";
import moviesJSON from "../../dummyDB/movies.json";
import seriesJSON from "../../dummyDB/series.json";
import genreJSON from "../../dummyDB/genre.json";

class Home extends Component {
  state = {
    Genres: [],
    Series: [],
    Movies: [],
  };
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

  render() {
    let showMovies = this.state.Movies.map((mov) => {
      let genRe = this.state.Genres.find((gen) => gen.id === mov.genre).name;

      return (
        <Movie
          key={mov.id}
          img={mov.img}
          genre={genRe}
          title={mov.title}
          localdate={mov.localdate}
          description={mov.description}
          rating={mov.rating}
        />
      );
    });
    return <div className="home-container ">{showMovies}</div>;
  }
}
export default Home;
