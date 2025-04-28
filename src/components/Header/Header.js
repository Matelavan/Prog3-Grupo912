import React from "react";
import Navegador from "./Navegador"; //Importa el componente Navegador, que maneja la barra de navegación.
import './styles.css';

function Header() {  
    let barraNavegador = [      //barraNavegador: Es un array de objetos que contiene información sobre las rutas y nombres de las diferentes secciones del sitio. 
        {
            name: 'Home',
            path: '/'
        }, {
            name: 'Favoritos',  //cada obejto tiene un name(El nombre de la sección que se mostrará en la barra de navegación) y un path(La ruta a la que llevará ese enlace)
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
                <img src="/image.jpg" className="logoTV" />
                <Navegador barraNavegador={barraNavegador} /> 
            </div> 
        </header>  //Un componente Navegador que recibe como prop la variable barraNavegador. Este componente será el encargado de mostrar los enlaces de navegación.
    ) 
};

export default Header;