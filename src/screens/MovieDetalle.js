import react, {Component} from "react";
import MovieCard from "../components/MovieCard/MovieCard"

class MovieDetalle extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/')
        .then((response)=> response.json)
        .then((data) => this.setState({
            movies: data.results
           
         }))
    }

    render(){
        return(
            <>
            <h1>Movies</h1>
            {
                this.state.movies.length === 0 ?
                <h1>Cargando personajes de RM</h1>
                :
                this.state.movies.map((elm, idx) => <MovieCard data={elm} key={idx + elm.name} /> )

            }
            </>
        )
    }
}

export default MovieDetalle