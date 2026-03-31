/**
 * 24) Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
 * vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
 * maiúsculas de minúsculas.
 * 
 * Exemplos:
 * 
 * contarCaractere("r", "A sorte favorece os audazes")     // retornará 2
 * contarCaractere("c", "Conhece-te a ti mesmo")       // retornará 1
 */

function contarCaractere(caractere, texto) {
    let contagem = 0
    for (let indice in texto) {
        if (texto[indice] === caractere) {
            contagem++
        }
    }
    return contagem
}

console.log(
    contarCaractere("r", "A sorte favorece os audazes")     // retornará 2
)

console.log(
    contarCaractere("c", "Conhece-te a ti mesmo")       // retornará 1
)