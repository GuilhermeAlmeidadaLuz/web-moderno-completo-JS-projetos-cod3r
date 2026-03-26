/**
 * 10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
 * ou false. 
 */

const divisivelPorTres = numero => (numero % 3 === 0)   // arrow function com retorno implícito e após verificação (true ou false)
console.log(divisivelPorTres(1))
console.log(divisivelPorTres(2))
console.log(divisivelPorTres(3))
console.log(divisivelPorTres(5))
console.log(divisivelPorTres(6))
console.log(divisivelPorTres(8))
console.log(divisivelPorTres(9))
console.log(divisivelPorTres(12))
console.log(divisivelPorTres(15))