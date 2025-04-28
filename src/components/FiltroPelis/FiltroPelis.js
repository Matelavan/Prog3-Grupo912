import React, {Component} from 'react'

class FiltroPelis extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput:'',  //valorInput: El texto que el usuario escribe para filtrar películas.
        }
    }
    manejarSubmit(evento){
        evento.preventDefault();  //Previene que el formulario recargue la página cuando se envía.
    }
    controlarForm(evento){   
        this.setState(
            {valorInput: evento.target.value},   //Actualiza el state con el nuevo valor.
            () => this.props.filtro (this.state.valorInput) //Llama a this.props.filtro pasando el nuevo texto (para filtrar las películas en el componente padre).
            )
    }
    render(){  //Muestra un formulario que contiene: Un input controlado por el state. Cada cambio en el input actualiza el filtro automáticamente (no hay botón de submit).
        return(
            <form onSubmit={(evento) => this.manejarSubmit(evento)}>
                <input onChange={(evento)=> this.controlarForm(evento)} placeholder="Filtra por pelicula!" value={this.state.valorInput}/> 
            </form>
        )
    }
}

export default FiltroPelis