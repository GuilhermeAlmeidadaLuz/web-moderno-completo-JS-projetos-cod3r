// aula 404. Múltiplos Componentes
import React from "react"

export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export { BoaNoite } // usado em destructuring
export default { BoaTarde, BoaNoite }   // objeto completo Multi