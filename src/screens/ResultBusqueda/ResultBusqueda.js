import React, { Component } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import './styles.css'

export default class ResultBusqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados:[]
        }  
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=30fb07c3e57fc8656acc83104dff9754&language=es`)
        .then(resp => resp.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <div>
        Resultados de: {this.state.busqueda}
        <section className='peliculas'>
            {this.state.resultados.map(peli => (
                                    <MovieCard key={peli.id} data={peli} />
                                ))}
        </section>
        
    </div>
    )
  }
}