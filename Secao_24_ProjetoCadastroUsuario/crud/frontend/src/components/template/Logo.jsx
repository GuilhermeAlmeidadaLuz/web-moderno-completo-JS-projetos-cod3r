// Aula 420. Criando Componentes (Template)
import './Logo.css'
import logo from '../../assets/imgs/logo.png'    // Aula 422. Componente Logo
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className='logo'>
        {/* <Link to='/' > substitui <a href='/' > */}
        {/* Aula 429. Implementando Rotas (React Router) */}
        <Link to="/" className="logo">    {/* Aula 422. Componente Logo */}
            <img src={logo} alt="logo" />
        </Link>
    </aside>