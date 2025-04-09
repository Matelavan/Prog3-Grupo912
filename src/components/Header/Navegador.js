import React from "react";
import { Link } from 'react-router-dom'
function Navegador(props) {
    return (
        <ul className="header">
            {
                props.barraNavegador.map((elemento, idx) => 
                <li key={`${elemento.name} - ${idx}`}>
                    <Link to={elemento.path}>
                    {elemento.name}            
                    </Link>
                              
                 </li>)
                
            }
            
        </ul>
    )
}

export default Navegador;