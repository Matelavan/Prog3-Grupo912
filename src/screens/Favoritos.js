import React, { Component } from "react";
import MovieCard from './../components/MovieCard/MovieCard';


class Favoritos extends Component {
    constructor(){
        super();
        this.state = {
            peliculasFavoritas: []  //peliculasFavoritas: Un array vacío al principio. Ahí se van a guardar las pelis favoritas que trae del localStorage.
        } 
    }
    componentDidMount(){                     //Busca en localStorage la lista de IDs de películas favoritas.
        let favoritos = [];
        let webstorage = localStorage.getItem("favoritos");
        if (webstorage!== null) {
            favoritos = JSON.parse(webstorage)    //Si encuentra algo: Lo convierte de texto a array (JSON.parse).
            let peliculas = []; 
            favoritos.forEach(unid => {
                fetch(`https://api.themoviedb.org/3/movie/${unid}?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES`) //Por cada ID, hace un fetch a la API para traer la información completa de cada película.
                .then(res => res.json())
                .then(data => {peliculas.push(data)
                    this.setState({
                        peliculasFavoritas: peliculas  //A medida que recibe cada respuesta, las va pusheando a un array peliculas, y actualizando el state con las películas completas.

                    })
                })
                .catch("error")
            });
        }
    }
    quitarFavoritos(id){      //Esta función se usa para sacar una película de favoritos.
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];   //Toma la lista de favoritos de localStorage.

    const nuevosFavoritos = favoritos.filter(unId => unId !== id);   //Filtra para eliminar el ID que queremos borrar.
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));   //Actualiza el localStorage con la nueva lista.

    let nuevasPelis = this.state.peliculasFavoritas.filter(peli => peli.id !== id);
    this.setState({
        peliculasFavoritas: nuevasPelis                   //También actualiza el state, sacando la película de la pantalla.
    });
    }
    render(){   //Muestra todas las películas que están en peliculasFavoritas.  
        return(<React.Fragment>
            <h2>Peliculas Favoritas</h2>
            <div className="peliculas">
                {this.state.peliculasFavoritas.map(peli => (
                    <MovieCard key={peli.id} data={peli} quitarFavoritos={(id) => this.quitarFavoritos(id)}/> //Cada película se muestra usando MovieCard, y se le pasa una función quitarFavoritos para poder sacarla si el usuario quiere en el componente MovieCard.
                ))}
            </div>
        </React.Fragment>)
    }
}


export default Favoritos;