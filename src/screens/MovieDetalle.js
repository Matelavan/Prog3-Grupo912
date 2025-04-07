import React, { Component } from "react";

class MovieDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movie: data }))
      .catch((error) => console.log(error));
  }

  render() {
    const { movie } = this.state;

    return (
      <>
        {movie === null ? (
          <h1>Cargando película...</h1>
        ) : (
          <div>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <p>Rating:{movie.vote_average}</p>
            <p>Fecha de estreno: {movie.release_date}</p>
            <p>Duracion:{movie.runtime}</p>
            <p>Sinopsis:{movie.overview}</p>
            <p>Generos:</p>
            <ul>
           {
           movie.genres.map((genre, idx) => (
           <li key={idx + genre.name}>{genre.name}</li>
              ))
               }
           </ul>

          
            
          </div>
        )}
      </>
    );
  }
}

export default MovieDetalle;