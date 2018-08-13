import React, { Component } from 'react';
import MovieList from "../components/MovieList.js"
import Showtimes from "../components/Showtimes.js"

class ImdbBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      movieData: [{
        title: "PK",
        showtime: "https://www.imdb.com/title/tt2338151/?ref_=fn_al_tt_1",
        image: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_UY268_CR1,0,182,268_AL_.jpg"
      },
      {
        title: "Cafe Society",
        showtime: "https://www.imdb.com/title/tt4513674/",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Cafe_Society.jpg/220px-Cafe_Society.jpg"
      },
      {
        title: "Morgan",
        showtime: "https://www.imdb.com/showtimes/title/tt4520364",
        image: "https://m.media-amazon.com/images/M/MV5BMjA1MjYyNDkxN15BMl5BanBnXkFtZTgwMTgxODAwOTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        title: "Mile 22",
        showtime: "https://www.imdb.com/showtimes/title/tt4560436/2018-08-16",
        image: "https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png"
      },
      {
        title: "Crazy Rich Asians",
        showtime: "https://www.imdb.com/showtimes/title/tt3104988",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeitiCUpQNRXltUnZ6hF1lzJFm-B6VVWXEhUhNWK9Xj3D4Kbkyfg"
      },
      {
        title: "Alpha",
        showtime: "https://www.imdb.com/showtimes/title/tt4244998",
        image: "https://resizing.flixster.com/eUVuzUGVJX8BGsrtytCZ7zEoV3E=/206x305/v1.bTsxMjc3NTc0MjtqOzE3Nzg3OzEyMDA7NjA3Mjs5MDAw"
      },
    {
      title: "Naam hai Akira",
      showtime: "https://www.imdb.com/showtimes/title/tt5465370",
      image: "https://m.media-amazon.com/images/M/MV5BYTE2MWI4MDctMjFlNi00OTUyLTkyMGItYTk3MThkMDFmOWE1XkEyXkFqcGdeQXVyNjE5MTgwOTU@._V1_UY268_CR1,0,182,268_AL_.jpg"
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
