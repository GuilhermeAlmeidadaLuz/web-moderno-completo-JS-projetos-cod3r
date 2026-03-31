/**
 * 15) Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
 * pares e que também tenham índices pares.
 * 
 * Obs: Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão dele por 2 é zero.
 * 
 * Exemplos:
 * 
 * receberSomenteOsParesdeIndicesPares([1, 2, 3, 4])    // retornará []
 * receberSomenteOsParesdeIndicesPares([10, 70, 22, 43])    // retornará [10, 22]
 */


const valorParIndicePar = (valor, indice) => (valor % 2 === 0) && (indice % 2  === 0)

const receberSomenteOsParesdeIndicesPares = (array) => array.filter(valorParIndicePar)


console.log(
    receberSomenteOsParesdeIndicesPares([1, 2, 3, 4])    // retornará []

)
console.log(
    receberSomenteOsParesdeIndicesPares([10, 70, 22, 43])    // retornará [10, 22]

)