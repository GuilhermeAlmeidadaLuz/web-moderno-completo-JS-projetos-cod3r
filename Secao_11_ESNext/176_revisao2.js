// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
// em função arrow sempre aponta para o módulo do node (arquivo atual), ou seja, exports ou module.exports
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log('Sou mais forte')

// Operador rest -> responsável por agrupar os parâmetros em uma função
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))