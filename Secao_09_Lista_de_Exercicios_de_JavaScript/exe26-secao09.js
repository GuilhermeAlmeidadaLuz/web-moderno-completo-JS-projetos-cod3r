/**
 * 26) Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
 * consoantes, ou seja, sem as vogais.
 * 
 * Exemplos:
 * removerVogais("Cod3r")      // retornará "Cd3r"
 * removerVogais("Fundamentos")    // retornará "Fndmnts"
 */

const eUmaVogal = (letra) => {
    const vogais = ["a", "e", "i", "o", "u"]
    return vogais.includes(letra.toLowerCase())
}

const removerVogais = (palavra) => {
    let novaPalavra = ''

    for (let caractere of palavra) {
        if (!eUmaVogal(caractere)) {
            novaPalavra += caractere
        }
    }
    return novaPalavra
}

console.log(
    removerVogais("Cod3r")      // retornará "Cd3r"
)

console.log(
    removerVogais("Fundamentos")    // retornará "Fndmnts"
)