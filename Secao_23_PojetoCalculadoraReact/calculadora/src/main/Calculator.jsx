// Aula 411. Componente Calculator
import React, { Component } from "react";
import './Calculator.css'

import Button from '../components/Button'   /* Aula 412. Componente Button #01 */
import Display from '../components/Display'; /* Aula 413. Componente Display */

const initialState = {  /* Aula 415. Implementando a Lógica #01 */
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0      // índice do array de valores operandos 
}

export default class Calculator extends Component {
    // state é atributo de Component e herdado por Calculator
    state = { ...initialState } // com operador spread, só os valores de initialState são postos dentro do objeto state (atributo do componente)
    
    constructor(props) {    /* Aula 414. Componente Button #02 */
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)

    }

    clearMemory() {   /* Aula 414. Componente Button #02 */
        // console.log('limpar')   /* Aula 414. Componente Button #02 */

        // o objeto (this) que chama essa função, é o Botão de label 'AC'. Contudo, o this interno se refere a Calculator
        this.setState({ ...initialState })  /* Aula 415. Implementando a Lógica #01 */
        // nesse caso, this se refere a Calculator, modificando um atributo de classe, que não faz parte
        // do construtor da objeto (instância de classe). Logo, a Calculadora como um todo retorna ao seu estado inicial
    }

    setOperation(operation) {   /* Aula 414. Componente Button #02 */
        // console.log(operation)

        /* Aula 416. Implementando a Lógica #02 */
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                    return
                }
            } catch (e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })

        }

    }

    addDigit(n) {   /* Aula 414. Componente Button #02 */
        // console.log(n)
        
        /* Aula 415. Implementando a Lógica #01 */
        if (n === '.' && this.state.displayValue.includes('.')) {   // se já ouver ponto na string do displayValue, desconsidera a inserção de outro
            return      // retorna undefined - que é falso, saindo da função addDigit sem alterar o display
        }

        const clearDisplay = this.state.displayValue === '0' // true se já estiver com um 0 digitado, para não concatenar '0' + '0' = '00' sucessivamente
            || this.state.clearDisplay  // true se uma operação for digitada, para recomeçar a digitação
        const currentValue = clearDisplay ? '' : this.state.displayValue    // quando digitar operação, clearDisplay será true
        const displayValue = currentValue + n   // concatenação dos dígitos
        this.setState({ displayValue,  clearDisplay: false })   // se um valor for digitado, a flag clearDisplay recebe false
    
        if (n !== '.') {    // se for '.', vai esperar o próximo número para então atualizar o array
            const i = this.state.current
            const newValue = parseFloat(displayValue)   // puxa o valor concatenado que aparece no display e que foi gerado na concatenação de dígitos no código acima
            const values = [...this.state.values]
            values[i] = newValue    // sobrepõe o valor
            this.setState({ values })   // atualiza o array de valores
            console.log(values)
        }
    }
    
    render() {
        const addDigit = n => this.addDigit(n)  /* Aula 414. Componente Button #02 */
        const setOperation = op => this.setOperation(op)    /* Aula 414. Componente Button #02 */
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} /*Diferente dos outros, esse this se refere a Calculator*//>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}