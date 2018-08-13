import React, { Component } from 'react';
import MovieList from "../components/MovieList.js"
import Showtimes from "../components/Showtimes.js"

class ImdbBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      movieData: [{
        title: "Sausage Party",
        showtime: "https://www.imdb.com/showtimes/title/tt1700841"
      },
      {
        title: "Cafe Society",
        showtime: "https://www.imdb.com/title/tt4513674/"
      },
      {
        title: "Morgan",
        showtime: "https://www.imdb.com/showtimes/title/tt4520364"
      },
      {
        title: "Mile 22",
        showtime: "https://www.imdb.com/showtimes/title/tt4560436/2018-08-16"
      },
      {
        title: "Crazy Rich Asians",
        showtime: "https://www.imdb.com/showtimes/title/tt3104988"
      },
      {
        title: "Alpha",
        showtime: "https://www.imdb.com/showtimes/title/tt4244998"
      },
    {
      title: "Naam hai Akira",
      showtime: "https://www.imdb.com/showtimes/title/tt5465370"
    }]
    }
  }

  render(){
    return(
      <div className="imdb-container">

        <h1>UK opening this week</h1>
        <MovieList data={this.state.movieData}></MovieList>
        <Showtimes/>
        
      </div>
    )
  }
}

export default ImdbBox;
