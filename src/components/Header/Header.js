import React from "react";
import Navegador from "./Navegador";
import './styles.css';

function Header() {
    let barraNavegador = [
        {
            name: 'Home',
            path: '/'
        }, {
            name: 'Favoritos',
            path: '/favoritos'
        },  {
            name: 'Top Rated',
            path: '/peliculasEnCartelera'
        }, {
            name: 'Proximamente',
            path: '/peliculasProximamente'
        }, {
            name: 'Ver Todas',
            path: '/verTodas'
        }
    ]

    return (
        <header className="site-header">
            <ul className="logoTV">
                <img src="/image.jpg" alt="" className="logoTV" />
            </ul>
            <Navegador barraNavegador = {barraNavegador} />
        </header>
    )
};

export default Header;