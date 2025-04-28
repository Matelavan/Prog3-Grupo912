import React from "react";
import { Link } from 'react-router-dom'
function Navegador(props) {  //Este componente recibe las propiedades (props) y utiliza la propiedad barraNavegador para generar una lista de enlaces.
    return (
        <ul className="header">  
            {
                props.barraNavegador.map((elemento, idx) =>  //Se recorre el array barraNavegador que se pasa como prop, que contiene objetos con el nombre y la ruta de cada sección.  
                <li key={`${elemento.name} - ${idx}`}>   
                    <Link to={elemento.path}>  
                    {elemento.name}             
                    </Link>                
                              
                 </li>)   //key={${elemento.name} - ${idx}}`: La clave única para cada elemento de la lista, asegurando que React pueda optimizar el proceso de renderizado.
                        //<Link to={elemento.path}>: Usa Link para navegar entre las rutas sin recargar la página. El texto del enlace es elemento.name, que es el nombre de la sección.

                
            }
            
        </ul>
    )
}

export default Navegador;