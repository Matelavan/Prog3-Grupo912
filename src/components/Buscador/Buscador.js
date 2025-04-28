import React, { Component } from 'react'



export default class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = { 
            input:''         //input: El texto que el usuario va escribiendo en el campo de búsqueda.
        }
    }

    controlarForm(evento){ 
        evento.preventDefault()   //Previene que la página se recargue.
        this.props.history.push('/resultBusqueda/'+ this.state.input) //Redirige a la ruta /resultBusqueda/[lo que escribió el usuario] usando this.props.history.push.
    }

    controlarInput(evento){
        this.setState({input: evento.target.value})  //Cada vez que el usuario escribe en el input, actualiza el state con el nuevo valor.
    }

  render() {  //Muestra un formulario que contiene Un input que está controlado por el state (lo que se escribe se guarda en input).
    return (
      <form
        onSubmit={(evento) => this.controlarForm(evento)}
      >
        <input 
        placeholder='Buscador' 
        value={this.state.input} 
        onChange={(evento) => this.controlarInput(evento)} 
        />  
        <button type='submit'>Buscar</button> 
      </form>  ////Un botón para enviar el formulario y disparar la búsqueda.
    )
  }
}

