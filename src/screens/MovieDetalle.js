import React, { Component } from "react";


class MovieDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movie: null,                  //movie va a guardar todos los datos de la película que se va a mostrar
    };
  }

  componentDidMount() {         //Apenas el componente se monta, hace un fetch a la API de The Movie DB.
    const id = this.props.match.params.id;   //Usa el ID que viene en la URL (this.props.match.params.id) para pedir los datos de esa película en particular.

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movie: data }))    //Cuando recibe la respuesta, guarda toda la info en this.state.movie.
      .catch((error) => console.log(error));
  }

  render() {
    const { movie } = this.state;

    return (
      <>
        {movie === null ? (                       //Si movie todavía es null, muestra el mensaje "Cargando película...".
          <h1>Cargando película...</h1>
        ) : (                                     //Si ya hay datos: muestra el titulo, el poster, el rating, etc
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
          //La lista de géneros (genres), usando un .map() para armar un <li> por cada género.
        )}
      </>
    );
  }
}

export default MovieDetalle;