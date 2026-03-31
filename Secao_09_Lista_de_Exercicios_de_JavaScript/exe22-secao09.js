/**
 * 22) Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
 * gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
 * sorteado internamente. Se o valor fornecido foi sorteado, retorne "Parabéns! O número sorteado foi o X". Se
 * não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
 * 
 * Exemplos:
 * 
 * funcaoDaSorte(10)    // retornará "Parabéns! O número sorteado foi 10"
 * funcaoDaSorte(5)    // retornará "Que pena! O número sorteado foi 3"
 * funcaoDaSorte(5)    // retornará "Que pena! O número sorteado foi 1"
 */

function funcaoDaSorte(numero) {
    if (numero >= 1 && numero <= 10) {
        // random - gera entre [0, 1[
        
        const numeroAleatorio = (Math.random() * 10) + 1   // +1 para incluir 10
        const numeroSorteado = Math.floor(numeroAleatorio)

        if (numero === numeroSorteado){
            return `Parabéns! O número sorteado foi ${numeroSorteado}`
        } else {
            return `Que pena! O número sorteado foi ${numeroSorteado}`
        }
    }
}

console.log(
    funcaoDaSorte(10)
)
console.log(
    funcaoDaSorte(5)
)
console.log(
    funcaoDaSorte(5)
)