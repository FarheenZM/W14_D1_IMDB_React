import React, {Component} from "react";

const Movie = (props) => {
  return(
    <div className="movie">
      <ul>
    <li>{props.movie.title}</li>
    <a href={props.movie.showtime}>Showtimes</a></ul>
  </div>
  )
}

export default Movie;
