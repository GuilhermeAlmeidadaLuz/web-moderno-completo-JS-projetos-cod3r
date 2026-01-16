// aula 407. Componentes: Pai & Filho #01
import React from 'react'
// import Filho from './Filho' // aula 407. Componentes: Pai & Filho #01

import { childrenWithProps } from '../utils/utils.js'       // aula 408. Componentes: Pai & Filho #02
// function childrenWithProps(props) { // levada para ../utils/utils.js
//     {/* aula 408. Componentes: Pai & Filho #02 */}
//     return React.Children.map(props.children, child => { // usando map do React.Children para contornar a situação
//         return React.cloneElement(child, {    // função cloneElement só recebe um elemento - erro com mais elementos
//             ...props, ...child.props   // sobreescreve com o último
//         })

//     })
// }

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* aula 407. Componentes: Pai & Filho #01 */}
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} /> */}

            {/* Com operador spread ... */}
            {/* <Filho {...props} />  */}
            
            {/*Assume o nome do pai pois foi sobrescrito*/}   
            {/* <Filho nome="Carla" {...props}  />  */}
            
            {/*Assume o nome "Carla" aproveitando o sobrenome do pai*/}
            {/* <Filho {...props} nome="Carla" />  */}

            {/* ??? */}
            
            {/* aula 408. Componentes: Pai & Filho #02 */}
            {/* {props.children} */}
            
            {
                // React.Children.map(props.children, child => { // usando map do React.Children para contornar a situação
                //     return React.cloneElement(child, {    // função cloneElement só recebe um elemento - erro com mais elementos
                //         ...props, ...child.props   // sobreescreve com o último
                //     })

                // })

                childrenWithProps(props)

            }

        </ul>
    </div>