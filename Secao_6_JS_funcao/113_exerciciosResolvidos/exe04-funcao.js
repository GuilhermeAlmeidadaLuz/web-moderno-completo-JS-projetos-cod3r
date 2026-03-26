/**
 * 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
 * e o resto da divisão destes dois valores.
 */

function divisao(dividendo, divisor) {
    if (divisor == 0) {
        console.log("Erro: Divisão por zero")
    } else {
        const resultado = Math.floor(dividendo / divisor)
        const resto = (dividendo % divisor)
        console.log(dividendo, '/', divisor,'\nResultado da Divisão Inteira:', resultado, '\nResto da Divisão Inteira:', resto) 
    }
}

divisao(4, 2)
divisao(4, 3)