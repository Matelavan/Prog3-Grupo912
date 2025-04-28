import React, { Component } from "react";
import MovieCard from '../../components/MovieCard/MovieCard';  //MovieCard: Componente que muestra cada película individualmente.
import { Link } from 'react-router-dom';
import Buscador from "../../components/Buscador/Buscador";    //buscador de películas.
import './styles.css'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            populares: [],            //populares: Películas populares que vienen de la API.  
            cartelera: [],            //cartelera: Películas que están en el cine ahora.
            busqueda: '',             //busqueda: Lo que escribe el usuario en el buscador.
            loading: true             //loading: Si está cargando los datos o no.
        }
    }

    componentDidMount(){
        const urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES&page=1';
        const urlCartelera = 'https://api.themoviedb.org/3/movie/now_playing?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES&page=1';
//Apenas el componente se monta, se hacen dos fetch a la API de The Movie DB: Uno para traer las películas populares. Otro para traer las de cartelera.

        fetch(urlPopulares)
            .then(res => res.json())
            .then(data => this.setState({ populares: data.results })) //// Cuando terminan de traer los datos, se guardan en el state.
            .catch(error => console.log(error));

        fetch(urlCartelera)
            .then(res => res.json())
            .then(data => this.setState({ cartelera: data.results, loading: false })) //// Cuando terminan de traer los datos, se guardan en el state. loading se pone en false cuando termina la carga de cartelera.
            .catch(error => console.log(error));
    }
    filtrarPeliculas (busquedaPelicula) {    //Sirve para actualizar el estado de búsqueda con lo que el usuario quiere buscar.
        this.setState({ busqueda: busquedaPelicula });    //Guarda en el state el texto que el usuario escribe en el buscador.
    }

    render(){
        const { populares, cartelera, busqueda, loading } = this.state;

        const filtrarPeliculas = (peliculas) =>
            peliculas.filter(peli =>
                peli.title.toLowerCase().includes(busqueda.toLowerCase())
            ); //FiltrarPeliculas (otra función adentro de render) filtra las películas para que solo se muestren las que coinciden con lo que el usuario busca.

        return (
            <div className="fondo" >

                
                <h1>Busca tu pelicula favorita!</h1>
                 <Buscador history={this.props.history} />


                {loading ? (                        //Si loading es true, muestra el mensaje "Cargando...".
                    <p>Cargando...</p>
                ) : (
                    // si ya cargo: Muestra una sección de Películas Populares y otra de Películas en Cartelera.
                    //Dentro de cada sección, muestra las películas usando MovieCard.
                    //Abajo de cada sección hay un Link para ver todas las películas de esa categoría.
                    <>
                        <section>
                            <h2>Películas Populares</h2>                                  
                            <div className="peliculas">
                                {filtrarPeliculas(populares).map(peli => (
                                    <MovieCard key={peli.id} data={peli} />
                                ))}
                            </div>
                            <Link to="/verTodas/populares">Ver todas</Link>
                        </section>

                        <section>
                            <h2>Películas en Cartelera</h2>
                            <div className="peliculas">
                                {filtrarPeliculas(cartelera).map(peli => (
                                    <MovieCard key={peli.id} data={peli} />
                                ))}
                            </div>
                            <Link to="/verTodas/cartelera">Ver todas</Link>
                        </section>
                    </>
                )}
            </div>
        );
    }
}

export default Home;
