// Aula 423. Componente Cabeçalho
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

// Aula 420. Criando Componentes (Template)
import './App.css'
import React from 'react'
import { HashRouter, BrowserRouter } from 'react-router-dom' /* Aula 429. Implementando Rotas (React Router) */

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
// import Home from '../components/home/Home' // Não precisa mais - Aula 429. Implementando Rotas (React Router)  
import Routes from './Routes'   /* Aula 429. Implementando Rotas (React Router) */
import Footer from '../components/template/Footer'

export default props =>
    /* Aula 429. Implementando Rotas (React Router) */
    <BrowserRouter>
        <div className="app">
            {/* Logo e Nav são <aside/>, dividindo a mesma porção lateral, um embaixo do outro */}
            <Logo /> {/* instanciar Logo (componente funcional) */}
            <Nav /> {/* instanciar Nav (componente funcional) */}
            
            {/* Home.jsx > Main.jsx e Footer usam a porção restante da tela */}
            {/* <Home /> está indicado em Route.jsx agora*/}
            <Routes />  {/* Aula 429. Implementando Rotas (React Router) */}
            
            <Footer />  {/* instanciar Footer (componente funcional) */}
        </div>
    </BrowserRouter>