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
        }, {
            name: 'Cartelera',
            path: '/ver-todas/cartelera'
        },
        {
            name: 'Populares',
            path: '/ver-todas/populares'
        }
    ]

    return (
        <header className="site-header">
            <div className="contenedor-header">
                <img src="/image.jpg" className="logoTV" />
                <Navegador barraNavegador={barraNavegador} />
            </div>
        </header>
    )
};

export default Header;