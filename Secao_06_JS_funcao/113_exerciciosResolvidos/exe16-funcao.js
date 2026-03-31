/**
 * 16)
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe 
 * como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
 * numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
 * 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. 
 */

const calculadora = (num1, operacao, num2) => {
    switch (operacao) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            if (num2 !== 0) { 
                return num1 / num2 
            }
            // caso seja 0, segue para o default que fará o retorno da mensagem de erro
        default:
            return '[ERRO] operação inválida, tente novamente!'
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, '/', -1))

console.log(calculadora(2, '/', 0))
console.log(calculadora(2, ')', 1))