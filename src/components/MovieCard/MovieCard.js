import React, { Component } from "react";
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: props.data
    };
  }

  render() {
    return (
      <div>
        <Link to={`/moviedetalle/${this.state.movieData.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300${this.state.movieData.poster_path}`}
            alt={this.state.movieData.title}
          />
          <h1>{this.state.movieData.title}</h1>
        </Link>
      </div>
    );
  }
}

export default MovieCard;
