import React from "react";
import Navegador from "./Navegador";
import './styles.css';
import Buscador from "../Buscador/Buscador";

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
            path: '/verTodas/cartelera'
        },
        {
            name: 'Populares',
            path: '/verTodas/populares'
        }
    ]

    return (
        <header className="site-header">
            <Buscador />
            <div className="contenedor-header">
                <img src="/image.jpg" className="logoTV" />
                <Navegador barraNavegador={barraNavegador} />
            </div>
        </header>
    )
};

export default Header;