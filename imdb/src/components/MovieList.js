import React, { Component } from 'react';
import Movie from "./Movie.js"

const MovieList = (props) => {
  const allMovies = props.data.map((movie, index) => {
    return(
      <Movie key={index} movie={movie}/>
    );
  })
  return <div className="movie list">
    <table>
    <tbody>
      {allMovies}
    </tbody>
    </table>

    <p><a href="https://www.imdb.com/calendar/?region=gb&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2f2bb126-46f8-48e8-a719-204cafffa9d4&pf_rd_r=17CWTPHGCDHY6NK5PE1X&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_sm">See more opening this week >></a></p>

  </div>
}

export default MovieList;
