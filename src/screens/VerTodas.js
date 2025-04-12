import React, {Component} from "react";
import MovieCard from './../components/MovieCard/MovieCard';


class verTodas extends Component {
    constructor(props){
        super(props)
        this.state = {
            populares: [],
            populares2: [],
            loading: true,
            pagina: ""
        }
    }

    componentDidMount(){
        const urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES&page=1';

        fetch(urlPopulares)
            .then(res => res.json())
            .then(data => this.setState({ populares: data.results, populares2: data.results, pagina: data.page}))
            .catch(error => console.log(error));
    }
    cargarMas(){
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES&page=${this.state.pagina+1}`;

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ populares: this.state.populares.concat(data.results), populares2: this.state.populares.concat(data.results), pagina: data.page+1}))
            .catch(error => console.log(error));
    }
    render(){
        return(<React.Fragment>
             <div className="peliculas">
                {this.state.populares2.map(peli => (
                <MovieCard key={peli.id} data={peli} />
                ))}
            </div>
            <button onClick={() => this.cargarMas()}>
                Cargar más peliculas
            </button>
        </React.Fragment>)
    }
}


export default verTodas;