/**
 * 23)
 * Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
 * aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
 * aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
 * "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

function calculaNota(codigoAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => {
        return a < b ? 1 : -1}) // ordena da maior nota para a menor
    
    let mediaPonderada = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    let status = (mediaPonderada >= 5) ? 'APROVADO' : 'REPROVADO'
    return `Código do Aluno: ${codigoAluno} - Notas: ${nota1}, ${nota2}, ${nota3} - Média Ponderada: ${mediaPonderada.toFixed(2)} - Status: ${status}`

}

console.log(calculaNota(100, 10, 5, 9))
console.log(calculaNota(123, 2.8, 6, 3.5))