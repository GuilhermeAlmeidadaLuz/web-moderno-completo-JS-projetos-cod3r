/**
 * 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
 * Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
 * triângulo).
 */

const classificaTriangulo = (lado1, lado2, lado3) => {
    let classificacao
    if ((lado1 === lado2) && (lado2 === lado3)) {
        classificacao = 'Equilátero'
    } else if ((lado1 !== lado2) && (lado2 !== lado3)) {
        classificacao = 'Escaleno'
    } else {
        classificacao = 'Isósceles'
    }
    return classificacao
}

console.log(classificaTriangulo(lado1 = 10, lado2 = 10, lado3 = 10))
console.log(classificaTriangulo(lado1 = 10, lado2 = 11, lado3 = 11))
console.log(classificaTriangulo(lado1 = 10, lado2 = 11, lado3 = 12))
console.log(classificaTriangulo(lado1 = 10, lado2 = 10, lado3 = 11))