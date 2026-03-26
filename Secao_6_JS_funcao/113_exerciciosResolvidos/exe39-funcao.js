/**
 * 39) 
 * Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
 * primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
 * Faça a troca sem utilizar uma variável auxiliar. 
 */


function inverteElementosDosVetores(vetor1, vetor2) {
    if (vetor1.length === vetor2.length) {
        
        for (let i = 0; i < vetor1.length; i++) {
            // via desestruturação
            [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]]
        }
        
        return vetor1, vetor2
        
    }
}

vetorA = [ 1, 3, 5, 7]
vetorB = [ 22, 14, 12, 30]
console.log("Antes:")
console.log('vetor 1:', vetorA, 'vetor 2:', vetorB)

console.log("Depois:")
// console.log("Depois:", typeof inverteElementosDosVetores(vetorA, vetorB))

vetorA, vetorB = inverteElementosDosVetores(vetorA, vetorB)
console.log('vetor 1:', vetorA, 'vetor 2:', vetorB)