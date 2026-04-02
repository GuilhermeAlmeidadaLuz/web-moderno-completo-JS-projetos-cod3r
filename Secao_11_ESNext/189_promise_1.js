// promise - promessa que vai ser resolvida no futuro

// ==================================================================================
// ==================================================================================
// ==================================================================================

/**
 *  let a = 1
 *  console.log(a)
 * 
 * console.log(typeof Promise) // function
 * new Promise() -> objeto ou instância da função/classe Promise | Obs: lembrando que em JS tudo é função (cidadão de 1ª classe) e Orientação a Objetos é escrita em cima desse conceito + protótipos
 * 
 * Promessa de algo que vai ser executado no futuro e devolvido no futuro | associado a uma promessa, há um valor retornado (resposta)
 * Para gerar um dado no futuro, é preciso passar uma função como parâmetro para uma Promise
*/
 
// let p = new Promise(function(cumprirPromessa) {
//     /**
//      * uma promessa gera apenas um único valor, ou seja, em JS, apenas 1 é considerado que é a primeira posição
//      * se desejar ter mais de uma informação, é preciso passar uma das estruturas de dados como: array, objeto ...
//     */
//     cumprirPromessa(3)
//     // cumprirPromessa(3, 4)    // no 'p.then(...)' será impresso '3 undefined'
//     // cumprirPromessa({x: 3, y: 4})    // no 'p.then(...)' será impresso '{x: 3, y: 4}'
//     // cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])    // no 'p.then(...)' será impresso '['Ana', 'Bia', 'Carlos', 'Daniel']'
// })

// console.log(typeof p) // object


// Para acessar valor, é prciso usar o método 'then()' da promise que recebe uma função como parâmetro, essa função interna também recebe um valor como parâmetro vindo da promessa cumprida

// p.then(function(valor) {    // (valor, y)
//     /**
//      * Entendendo o fluxo:
//      * cumprirPromessa foi executado? sim, então chama a callback
//      * cumprirPromessa(valor => function (valor) { console.log(valor) })
//      * cumprirPromessa(3 => function (3) { console.log(3) })
//      */
//     console.log(valor)  // (valor, y) -> valor = 3 e y = undefined
// })

// ==================================================================================
// ==================================================================================
// ==================================================================================

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

// o resultado de um método then() é passado para o próximo método then() e assim sucessivamente se houver chamadas then() encadeadas
p
    // .then(valor => valor[0])    // o retorno valor[0] é passado como argumento para o próximo then(primeiro =>...)
    // .then(primeiro => primeiro[0])  // o retorno primeiro[0] é passado como argumento para o próximo then(letra =>...)
    // .then(letra => letra.toLowerCase()) // o retorno letra.toLowerCase() é passado como argumento para o próximo then(letraMinuscula =>...)
    // .then(letraMinuscula => console.log(letraMinuscula))
    // 
    // Mesmo resultado escrito de outro jeito, passando a referência para a função (nome dela):
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

// ==================================================================================
// ==================================================================================
// ==================================================================================

new Promise(function(resolve) {
    resolve(['Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

// ==================================================================================
// ==================================================================================
// ==================================================================================
const primeiroElementoIteravel = ArrayOuString => ArrayOuString[0]

new Promise(function(resolve) {
    resolve(['Carlos', 'Daniel'])
})
    .then(primeiroElementoIteravel)
    .then(primeiroElementoIteravel)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)