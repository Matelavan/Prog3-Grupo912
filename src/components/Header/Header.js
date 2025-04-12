import React from "react";
import Navegador from "./Navegador";
import './styles.css';
import Buscador from "../Buscador/Buscador";

function Header(props) {
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
             
            <div className="contenedor-header">
                <Buscador history={props.history} />
                <img src="/image.jpg" className="logoTV" />
                <Navegador barraNavegador={barraNavegador} />
            </div>
        </header>
    )
};

export default Header;