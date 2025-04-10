import React, { Component } from "react";
import MovieCard from '../components/MovieCard/MovieCard';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            populares: [],
            cartelera: [],
            busqueda: '',
            loading: true
        }
    }

    componentDidMount(){
        const urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES&page=1';
        const urlCartelera = 'https://api.themoviedb.org/3/movie/now_playing?api_key=30fb07c3e57fc8656acc83104dff9754&language=es-ES&page=1';

        fetch(urlPopulares)
            .then(res => res.json())
            .then(data => this.setState({ populares: data.results }))
            .catch(error => console.log(error));

        fetch(urlCartelera)
            .then(res => res.json())
            .then(data => this.setState({ cartelera: data.results, loading: false }))
            .catch(error => console.log(error));
    }

    render(){
        const { populares, cartelera, busqueda, loading } = this.state;

        const filtrarPeliculas = (peliculas) =>
            peliculas.filter(peli =>
                peli.title.toLowerCase().includes(busqueda.toLowerCase())
            );

        return (
            <div>
                <h1>Películas</h1>
                <input
                    type="text"
                    placeholder="Buscar películas..."
                    value={busqueda}
                    onChange={(e) => this.setState({ busqueda: e.target.value })}
                />

                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        <section>
                            <h2>Películas Populares</h2>
                            <div>
                                {filtrarPeliculas(populares).map(peli => (
                                    <MovieCard key={peli.id} data={peli} />
                                ))}
                            </div>
                            <Link to="/ver-todas/populares">Ver todas</Link>
                        </section>

                        <section>
                            <h2>Películas en Cartelera</h2>
                            <div>
                                {filtrarPeliculas(cartelera).map(peli => (
                                    <MovieCard key={peli.id} data={peli} />
                                ))}
                            </div>
                            <Link to="/ver-todas/cartelera">Ver todas</Link>
                        </section>
                    </>
                )}
            </div>
        );
    }
}

export default Home;
