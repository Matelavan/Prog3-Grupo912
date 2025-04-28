import React, { Component } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import './styles.css'

export default class ResultBusqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,  //busqueda: Guarda lo que el usuario escribió (lo toma de props.match.params.busqueda, o sea, de la URL).
            resultados:[]      //resultados: Array vacío donde se van a guardar las películas que encontró la búsqueda.
        }  
    }

    componentDidMount(){  //Hace un fetch a la API de búsqueda de películas (/search/movie).
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=30fb07c3e57fc8656acc83104dff9754&language=es`) //Usa la palabra que el usuario buscó (this.state.busqueda).

        .then(resp => resp.json())
        .then(data => this.setState({resultados: data.results})) //Cuando llegan los datos, guarda las películas en resultados.
        .catch(err => console.log(err))
    }

  render() {
    return (
      <div>
        Resultados de: {this.state.busqueda}
        <section className='peliculas'>
            {this.state.resultados.map(peli => (
                                    <MovieCard key={peli.id} data={peli} />  //Luego muestra todas las películas encontradas usando MovieCard.
                                ))}
        </section>
        
    </div>
    )
  }
}