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
            <ul className="logoTV">
                <img src="/image.jpg" alt="" className="logoTV" />
            </ul>
            <Navegador barraNavegador = {barraNavegador} />
        </header>
    )
};

export default Header;