import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './styles.css'

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: props.data,
      textofavoritos: "Agregar a favoritos",
      descripcion: "oculta",
      textodescripcion: "Ver descripción"
    };
  }
componentDidMount(){
  let favoritos = [];
  let webstorage = localStorage.getItem("favoritos");
  if (webstorage!==null) {
    favoritos=JSON.parse(webstorage)
  };
  if (favoritos.includes(this.state.movieData.id)) {
    this.setState({
      textofavoritos: "Quitar de favoritos"
    })
  }

}
mostrarDescripcion(){
  if (this.state.descripcion === "oculta") {
    this.setState({
      descripcion: "visible",
      textodescripcion: "Ocultar descripción"
    })
  }
  else {
    this.setState({
      descripcion: "oculta",
      textodescripcion: "Ver descripción"
    })
  }
}
favoritos(id){
  let favoritos = [];
  let webstorage = localStorage.getItem("favoritos");
  if (webstorage!==null) {
    favoritos=JSON.parse(webstorage)
  };
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(elid => elid!== id);
    this.setState({
      textofavoritos: "Agregar a favoritos"
    })
  }
  else {
    favoritos.push(id);
    this.setState({
      textofavoritos: "Quitar de favoritos"
    })
  }
  let favoritosString = JSON.stringify(favoritos);
  localStorage.setItem("favoritos", favoritosString);
  console.log(localStorage)
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
          <p className={this.state.descripcion}>{this.state.movieData.overview}</p>
          <p onClick={() => this.mostrarDescripcion()}>{this.state.textodescripcion}</p>
      <button onClick={() => this.favoritos(this.state.movieData.id)}>
        {this.state.textofavoritos}
      </button>
      </div>
    );
  }
}

export default MovieCard;
