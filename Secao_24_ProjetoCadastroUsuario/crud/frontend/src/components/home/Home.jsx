// Aula 426. Componente Conteúdo
import React from 'react'
import Main from '../template/Main' // automaticamente importa Header.jsx (instanciado em Main.jsx) e conteúdo de main

export default props =>
    <Main icon="home" title="Início"
        subtitle="Segundo Projeto do capítulo de React.">   {/* instanciar Main (componente funcional) */}
        {/* propriedades icon, title e subtitle do Main passadas - Aula 423. Componente Cabeçalho */}
        {/* Aula 426. Componente Conteúdo */}
        {/* childrens abaixo, acessíveis com o operador ponto no componente Main.jsx: */}
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
    </Main>