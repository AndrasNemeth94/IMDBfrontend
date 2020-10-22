import React from "react";
import "./Movie.css";

const Movie = ({ img, alt, title, genre, localdate, rating }) => {
  return (
    <div className="movie-container">
      <div className="movie-img-container">
        <img
          className="movie-img "
          src={require("../../dummyDB/images/" + img)}
          alt={alt}
        ></img>
      </div>
      <div className="movie-infobox">
        <h1>{title}</h1>
        <p className="movie-mobile-none">Genre: {genre}</p>
        <p className="movie-mobile-none">Date: {localdate}</p>
        <p className="movie-mobile-visible">Rate: {rating}</p>
        <img
          className="movie-rating-img"
          src={require("../../dummyDB/images/star.png")}
          alt="star"
        ></img>
      </div>
    </div>
  );
};
export default Movie;
