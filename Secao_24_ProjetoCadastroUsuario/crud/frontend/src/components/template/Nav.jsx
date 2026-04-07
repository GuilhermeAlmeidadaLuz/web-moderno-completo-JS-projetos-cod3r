// Aula 420. Criando Componentes (Template)
import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'     /* Aula 429. Implementando Rotas (React Router) */

export default props =>
    <aside className="menu-area">
        {/* Aula 425. Componente Navegação */}
        <nav className="menu">
            {/* Refatorar em casa! */}
            {/* <Link to='/' > substitui <a href='#/' > */}
            {/* Aula 429. Implementando Rotas (React Router) */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>