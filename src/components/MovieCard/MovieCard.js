import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './styles.css'

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: props.data
    };
  }

  render() {
    return (
      <div className="movieCard">
        <Link to={`/moviedetalle/${this.state.movieData.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300${this.state.movieData.poster_path}`}
            alt={this.state.movieData.title}
          />
          </Link>
          <p>{this.state.movieData.title}</p>
          <p>{this.state.movieData.overview}</p>
      
      </div>
    );
  }
}

export default MovieCard;
