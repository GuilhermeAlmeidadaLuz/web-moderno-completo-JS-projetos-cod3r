import React from 'react'   // aula 401. Criando Projeto:
import ReactDOM from 'react-dom'    // aula 401. Criando Projeto:

// import Primeiro from './componentes/Primeiro'   // aula 402. Primeiro Componente
import BomDia from './componentes/BomDia'       // aula 403. Componente Com Parâmetro
import Multi, { BoaNoite } from './componentes/Multiplos'   // aula 404. Múltiplos Componentes
import Saudacao from './componentes/Saudacao'       // aula 405. Componente de Classe #01
import Pai from './componentes/Pai'         // aula 407. Componentes: Pai & Filho #01
import Filho from './componentes/Filho'     // aula 408. Componentes: Pai & Filho #02

// aula 401. Criando Projeto:
// const elemento = <h1>React 2</h1>
// ReactDOM.render(elemento, document.getElementById('root'))
// JQuery -> $('<h1>').html('React 2')

// aula 402. Primeiro Componente:
// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// aula 403. Componente Com Parâmetro:
// ReactDOM.render(<BomDia nome='Guilherme' idade={10}/>, document.getElementById('root'))

// aula 404. Múltiplos Componentes
// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome='Ana'/>
//         <BoaNoite nome='Bia'/>
//     </div>
// , document.getElementById('root'))

// aula 405. Componente de Classe #01
// aula 406. Componente de Classe #02
// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João"/>
//     </div>
// , document.getElementById('root'))

// aula 407. Componentes: Pai & Filho #01
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            {/* aula 408. Componentes: Pai & Filho #02 */}
            <Filho nome="Pedro" /*sobrenome="Silva"*/ />
            <Filho nome="Paulo" /*sobrenome="Silva"*/ />
            <Filho nome="Carla" /*sobrenome="Silva"*/ />
        </Pai>
    </div>
, document.getElementById('root'))