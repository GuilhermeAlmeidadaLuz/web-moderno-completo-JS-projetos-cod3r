import React from "react"

export function childrenWithProps(props) {
    {/* aula 408. Componentes: Pai & Filho #02 */}
    return React.Children.map(props.children, child => { // usando map do React.Children para contornar a situação
        return React.cloneElement(child, {    // função cloneElement só recebe um elemento - erro com mais elementos
            ...props, ...child.props   // sobreescreve com o último
        })

    })
}