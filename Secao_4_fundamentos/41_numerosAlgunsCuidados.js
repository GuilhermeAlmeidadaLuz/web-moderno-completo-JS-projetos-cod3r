console.log(7 / 0.00000001) // o número cresce
console.log(7 / 0)      // Infinity - não gera erro

console.log("10" / 2)       // resultado = 5, converte para inteiro e divide
console.log('3' + 2)        // concatenação '32', prioridade da string!
console.log('3' - 2)        // subtração, retorna 1 do tipo number

console.log("Show!" * 2)    // NaN - Not a Number
console.log(0.1 + 0.7)      // aproximado

// console.log(10.toString())  // erro
console.log((10.345).toFixed(2))