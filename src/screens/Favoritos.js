import React, { Component } from "react";
import MovieCard from './../components/MovieCard/MovieCard';


class Favoritos extends Component {
    constructor(){
        super();
        this.state = {
            peliculasFavoritas: []
        }
    }
    componentDidMount(){
        let favoritos = [];
        let webstorage = localStorage.getItem("favoritos");
        if (webstorage!== null) {
            favoritos = JSON.parse(webstorage)
            let peliculas = [];
            favoritos.forEach(unid => {
                fetch(`https://api.themoviedb.org/3/movie/${unid}?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES`)
                .then(res => res.json())
                .then(data => {peliculas.push(data)
                    this.setState({
                        peliculasFavoritas: peliculas
                    })
                })
                .catch("error")
            });
        }
    }
    quitarFavoritos(id){
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    const nuevosFavoritos = favoritos.filter(unId => unId !== id);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));

    let nuevasPelis = this.state.peliculasFavoritas.filter(peli => peli.id !== id);
    this.setState({
      peliculasFavoritas: nuevasPelis
    });
    }
    render(){
        return(<React.Fragment>
            <h2>Peliculas Favoritas</h2>
            <div className="peliculas">
                                {this.state.peliculasFavoritas.map(peli => (
                                    <MovieCard key={peli.id} data={peli} quitarFavoritos={(id) => this.quitarFavoritos(id)}/>
                                ))}
                            </div>
        </React.Fragment>)
    }
}


export default Favoritos;