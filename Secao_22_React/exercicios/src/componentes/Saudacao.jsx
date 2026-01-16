// aula 405. Componente de Classe #01

import React, { Component } from "react";

export default class Saudacao extends Component {
    
    state = {  // estado manda na renderização do componente, logo atualiza o estado para atualizar o componente
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props) { // aula 406. Componente de Classe #02
        super(props) 
        
        this.setTipo = this.setTipo.bind(this)  // this dentro do construtor é de fato uma instância de Saudacao
        // this.setNome = this.setNome.bind(this)  // this dentro do construtor é de fato uma instância de Saudacao
    }
    
    setTipo(evento) {
        // console.log(evento.target.value)
        // this.props.tipo = evento.target.value    // não consegue altera - acusa erro
        // let i = 1
        // setInterval(() => {
        //     this.setState({ tipo: ++i })
        // }, 1000)
        this.setState({ tipo: evento.target.value })
    }

    setNome(evento) {
        this.setState( { nome: evento.target.value } )
    }

    // input só muda com OnChange
    render() {
        // const { tipo, nome } = this.props    // não permite alteração
        const { tipo, nome } = this.state       // permite alteração
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}