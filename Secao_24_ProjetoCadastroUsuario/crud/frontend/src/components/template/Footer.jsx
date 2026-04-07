// Aula 420. Criando Componentes (Template)
import './Footer.css'
import React from 'react'

export default props =>
    <footer className="footer">
        {/* Aula 424. Componente Rodapé */}
        <span>
            Desenvolvido com <i className="fa fa-heart text-danger" /*aplica coração (fa-heart) e cor vermelha (text-danger) */></i> por
            <strong> Cod<span className='text-danger'>3</span>r</strong>
        </span>
    </footer>