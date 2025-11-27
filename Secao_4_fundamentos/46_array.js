/**
 * Array
 * 
 * Heterogêneo (Linguagem Tipagem Fraca);
 * Não tem tamanho fixo (Cresce e Diminui);
 * Tem índice associado (indexável)
 */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])     // undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores[10] = 12
console.log(valores)        // salta até a posição que tem algum valor
console.log(valores.length) // contabiliza os espaços que não tem valor, pois estão reservados

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())  // retira o último elemento

delete valores[0]
console.log(valores)

console.log(typeof valores)