import React, {Component} from 'react'

class FiltroPelis extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput:'',
        }
    }
    manejarSubmit(evento){
        evento.preventDefault();
    }
    controlarForm(evento){
        console.log('esta es la pelin que llega', evento)
        this.setState(
            {valorInput: evento.target.value},
            () => this.props.filtro (this.state.valorInput)
            )
    }
    render(){
        return(
            <form onSubmit={(evento) => this.manejarSubmit(evento)}>
                <input onChange={(evento)=> this.controlarForm(evento)} value={this.state.valorInput}/>
            </form>
        )
    }
}

export default FiltroPelis