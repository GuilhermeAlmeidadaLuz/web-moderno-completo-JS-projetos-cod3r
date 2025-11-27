// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    // imprimirSoma recebe uma função anônima
    console.log(a + b) 
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    // a seta substitui a palavra reservada 'function'
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))    // retorno a - b

const subtracao2 = (a, b) => {a - b}
console.log(subtracao2(2, 3))   // retono é undefined

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')    
// console.log(imprimir2('Legal!!!'))   // se houvesse uma linha com 'a' haveria retorno a