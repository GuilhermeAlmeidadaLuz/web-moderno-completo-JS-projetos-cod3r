// Aula 420. Criando Componentes (Template)
import './Main.css'
import React from 'react'
import './Header'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props} />  {/* propriedades recebidas de Componente Main passam para o Componente Header - Aula 423. Componente Cabeçalho */}
        <main className="content container-fluid"> {/* Aula 426. Componente Conteúdo */}
            {/* container-fluid é uma classe do bootstrap que foi importado em App.jsx */}
            <div className="p-3 mt-3">
                {/* p-3 é o padding | mt-3 é margin-top */}
                {props.children}
            </div>
        </main>
    </React.Fragment>