/**
 * 23) Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
 * 
 * Obs: Considere que todas as palavras só são separadas por um espaço.
 * 
 * Exemplos:
 * 
 * contarPalavras("Sou uma frase")  // retornará 3
 * contarPalavras("Me divirto aprendendo a programar")      // retornará 5
 */

const contarPalavras = (frase) => {
    palavras = frase.split(" ")
    // console.log(palavras)
    return palavras.length
}

console.log(
    contarPalavras("Sou uma frase")  // retornará 3
)

console.log(
    contarPalavras("Me divirto aprendendo a programar")      // retornará 5
)