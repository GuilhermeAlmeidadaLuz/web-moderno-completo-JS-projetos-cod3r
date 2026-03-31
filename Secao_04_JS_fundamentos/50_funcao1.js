/**
 * Bloco de código nomeado
 * reutilizável
 * pode ou não ter parâmetros de entrada
 * pode ou não retornar
 */

// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)     // em JS posso passar só um valor, o segundo é undefined, logo imprime a soma como NaN (Not a Number)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)     // em JS é possível passar mais argumentos do que o necessário, mas só os 2 primeiros serão usados
imprimirSoma()  // resultado é NaN (Not a Number)

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

// soma(2, 3)   // não imprime no console
console.log(soma(2, 3))
console.log(soma(2))    // soma com b padrão = 1
console.log(soma())    // NaN pois soma a = undefined + b = 1
