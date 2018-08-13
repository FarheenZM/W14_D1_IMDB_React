import React, {Component} from "react";

const Movie = (props) => {
  return(
    // <div className="movie">

      <tr>
        <td>{props.movie.title}</td>
        <td><a href={props.movie.showtime}>Showtimes</a></td>
      </tr>

    // </div>
  )
}

export default Movie;
