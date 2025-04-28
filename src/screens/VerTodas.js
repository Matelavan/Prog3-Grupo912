import React, {Component} from "react";
import MovieCard from './../components/MovieCard/MovieCard';
import FiltroPelis from "./../components/FiltroPelis/FiltroPelis"; //FiltroPelis: Componente que permite buscar películas escribiendo texto.


class verTodas extends Component {
    constructor(props){
        super(props)
        this.state = {
            populares: [],  //populares: Un array con todas las películas populares que vienen de la API.
            busqueda: '',   //busqueda: Lo que escribe el usuario para filtrar películas.
            loading: true,  
            pagina: "",     //pagina: Número de página actual de los resultados (para paginación)
        }
    }

    componentDidMount(){
        const urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES&page=1'; //Hace un fetch a la API de películas populares (primera página).

        fetch(urlPopulares)
            .then(res => res.json())
            .then(data => this.setState({ populares: data.results, pagina: data.page})) //Guarda las películas en populares y la página actual en pagina.
            .catch(error => console.log(error));
    }
    cargarMas(){  //Cuando el usuario toca el botón "Cargar más películas": Hace otro fetch a la siguiente página (pagina + 1) de la API.
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES&page=${this.state.pagina+1}`;

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ populares: this.state.populares.concat(data.results), pagina: data.page+1})) //Agrega las nuevas películas al array anterior (this.state.populares.concat(...)). y Actualiza la pagina sumándole uno.
            .catch(error => console.log(error));
    }

    filtrarPeliculas (busquedaPelicula) {       
        this.setState({ busqueda: busquedaPelicula }); //Guarda en el state el texto que el usuario escribe en el buscador.
    }

    render(){
        const {busqueda} = this.state;

        const filtrarPeliculas = (peliculas) =>
            peliculas.filter(peli =>
                peli.title.toLowerCase().includes(busqueda.toLowerCase())
            );
        return(<React.Fragment>  
            <FiltroPelis filtro={(busqueda) => this.filtrarPeliculas(busqueda)} />   
             <div className="peliculas">
                {filtrarPeliculas(this.state.populares).map(peli => (   
                    <MovieCard key={peli.id} data={peli} />   //Renderiza cada película usando MovieCard.
                ))} 
            </div> 
            <button onClick={() => this.cargarMas()}>     
                Cargar más peliculas
            </button>           
        </React.Fragment>)
        //Tiene un botón "Cargar más películas" que llama a la función cargarMas().
    }
}


export default verTodas;