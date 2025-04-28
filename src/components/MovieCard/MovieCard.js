import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './styles.css'

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: props.data,  //movieData: Recibe la información de la película desde las props (de las que lo llaman, como Home, Favoritos, etc.).
      textofavoritos: "Agregar a favoritos", //textofavoritos: Texto que cambia dependiendo de si la película está o no en favoritos ("Agregar a favoritos" o "Quitar de favoritos").
      descripcion: "oculta",    //descripcion: Controla si la descripción de la película se muestra o no. Empieza con el valor "oculta".
      textodescripcion: "Ver descripción"  //textodescripcion: El texto del botón que cambia entre "Ver descripción" y "Ocultar descripción".
    };
  }
componentDidMount(){
  let favoritos = [];
  let webstorage = localStorage.getItem("favoritos");  
  if (webstorage!==null) {                  
    favoritos=JSON.parse(webstorage)               //cuando se monta, lo que hace es ver si el local storage tiene peliculas favoritas que fueron agregadas anteriormenmte y si hay las pasa a array con JSON.parse
  };
  if (favoritos.includes(this.state.movieData.id)) {   
    this.setState({
      textofavoritos: "Quitar de favoritos"        //Si está, cambia el texto del botón a "Quitar de favoritos".        
    })
  }

}
mostrarDescripcion(){                            //Es un evento onClick que si lo tocas muestra u oculta la desripcion 
  if (this.state.descripcion === "oculta") {
    this.setState({
      descripcion: "visible",                      //Si está oculta, la hace visible y cambia el texto del botón a "Ocultar descripción".
      textodescripcion: "Ocultar descripción"
    })
  }
  else {
    this.setState({
      descripcion: "oculta",
      textodescripcion: "Ver descripción"         //Si ya está visible, la oculta y cambia el texto del botón a "Ver descripción".
    })
  }
}
favoritos(id){      //Es una función que se aplica cuando agregamos la pelicula a favoritos (en la screen vemos que solo esta quitar de favoritos porque es lo que se va a ver primeramente porque la pelicula ya forma parte de favoritos)
  let favoritos = [];
  let webstorage = localStorage.getItem("favoritos");  
  if (webstorage!==null) {
    favoritos=JSON.parse(webstorage)
  };
  if (favoritos.includes(id)) {   
    favoritos = favoritos.filter(elid => elid!== id);  //Esto lo que dice es si el ID de la pelicula ya estaba en favoritos (es decir que la pelicula esta en favoritos) entonces que saque el ID de favoritos y por ende vamos a dejar de ver a la pleicula en favoritos
    this.setState({
      textofavoritos: "Agregar a favoritos"
    })
  }
  else {
    favoritos.push(id);                             //Y si el ID no esta favoritos, lo agrega y por ende despues en la screen vamos a ver la pelicula en favoritos  
    this.setState({
      textofavoritos: "Quitar de favoritos"
    })
  }
  let favoritosString = JSON.stringify(favoritos);       //ese ID de pelicula que ahora se encuentra en favoritos  
  localStorage.setItem("favoritos", favoritosString);      
  console.log(localStorage)
}
  render() {
    return (  //Muestra la película: la imagen, el titulo, la descripcion, el boton agregar a favoritos o quitar de favoritos segun como corresponda y Un Link para ir a la página de detalle de la película.

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
      <button onClick={() => {
        if (this.props.quitarFavoritos) {
          this.props.quitarFavoritos(this.state.movieData.id)  //Si el componente recibe una prop quitarFavoritos, la utiliza para quitar la película de favoritos directamente desde otros lugares (como en la página de Favoritos).
        }
        else {
          this.favoritos(this.state.movieData.id)}
        }
      }>
        {this.state.textofavoritos}
      </button>
      </div>
    );
  }
}

export default MovieCard;  //exportamos la MovieCard para usarla cuando tenemos que mostrar las caracteristicas de las peliculas (home, favoritos y ver todas (cartelera y populares))
