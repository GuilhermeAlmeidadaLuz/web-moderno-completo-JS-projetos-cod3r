// Aula 420. Criando Componentes (Template)
import './Header.css'
import React from 'react'

export default props => 
    <header className="header d-none d-sm-flex flex-column"> {/* className="header" com inserção de classes fica className="header d-none d-sm-flex flex-column" - Aula 423. Componente Cabeçalho */}
        {/* "d-none" o header não aparece em dispositivos celulares (para responsividade) - Aula 423. Componente Cabeçalho */ }
        {/* "d-sm-flex" se dispositivo for sm (smartphone - dispositivos pequenos, médios, grandes, extragrandes) usa display flex para o header (para responsividade) - Aula 423. Componente Cabeçalho */ }
        {/* "flex-column" orientação para usar coluna (para responsividade) em vez da padrão para linha "flex-row" - Aula 423. Componente Cabeçalho */ }
        <h1 className="mt-3">   {/* mt-3: margin-top 3 */}
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className='lead text-muted' /* alterou formato da letra e cor para sombreado*/>{props.subtitle}</p>
    </header>