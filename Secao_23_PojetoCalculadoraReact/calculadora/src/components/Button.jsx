/* Aula 412. Componente Button #01 */
import React from "react"
import './Button.css'

export default props => {
    /* Aula 414. Componente Button #02 */ 
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}

// export default props => 
//     <button className={`
//         button
//         ${props.operation ? 'operation' : ''}
//         ${props.double ? 'operation' : ''}
//         ${props.triple ? 'operation' : ''}
//     `}>
//         {props.label}
//     </button>