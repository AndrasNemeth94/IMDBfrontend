import React, { useState, useEffect } from "react";
import "./Home.css";
import Movie from "../../components/Movie/Movie";
import axios from "axios";
import Api from "../../api/Api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios
      .get(`${Api.url}/api/movies/`)
      .then((res) => {
        const getMovies = res.data;
        setMovies(getMovies);
      })
      .catch((err) => console.log("hiba: " + err));

    axios.get(`${Api.url}/api/tvseries/`).then((res) => {
      const getSeries = res.data;
      setSeries(getSeries);
    });
  }, []);

  return (
    <div className="home-container ">
      <h1 className="h1-mov">Movies</h1>
      <hr className="separator" />
      <div>
        {movies.map((el) => {
          return (
            <Movie
              key={el.id}
              id={el.id}
              title={el.title}
              release={el.release}
              description={el.description}
              rating={el.rating}
            />
          );
        })}
        <h1>Series</h1>
        <hr className="separator" />
        {series.map((el) => {
          return (
            <Movie
              key={el.id}
              id={el.id}
              title={el.title}
              release={el.release}
              description={el.description}
              rating={el.rating}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
