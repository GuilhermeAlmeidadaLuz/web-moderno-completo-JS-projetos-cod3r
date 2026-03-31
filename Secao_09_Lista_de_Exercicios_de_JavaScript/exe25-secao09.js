/**
 * 25) A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
 * identificar palavras semelhantes.
 * Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
 * de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
 * 
 * Exemplos:
 * 
 * buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])  // retornará ["programação", "profissional"]
 * buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])   // retornará []
 * 
 */

// const verificaPrefixoNaPalavra(prefixo,)

function buscarPalavrasSemelhantes(prefixoInicial, arrayDePalavras) {
    let palavrasEncontradas = []
    
    arrayDePalavras.forEach( (palavra) => {
        let ponteiroDoPrefixo = 0
        let ponteiroDaPalavra = 0
        
        while (ponteiroDaPalavra < palavra.length) {

            if (ponteiroDoPrefixo === prefixoInicial.length) {
                palavrasEncontradas.push(palavra)
                break
            } 
            else {
                
                if (palavra[ponteiroDaPalavra] !== prefixoInicial[ponteiroDoPrefixo] ) {
                    ponteiroDoPrefixo = 0   // reinicia a busca
                    ponteiroDaPalavra++     // incrementa o ponteiro da palavra
                } 
                else if (palavra[ponteiroDaPalavra] === prefixoInicial[ponteiroDoPrefixo]) {
                    ponteiroDoPrefixo++
                    ponteiroDaPalavra++
                    // incrementa ambos pois encontrou o caractere
                    // console.log(ponteiroDoPrefixo)
                }

            }

        }

    })

    return palavrasEncontradas
    
}

console.log(
    buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])  // retornará ["programação", "profissional"]
)
console.log(
    buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])   // retornará []
)

// Alternativa do Professor - com método de string "includes"
const buscarPalavrasSemelhantes2 = (prefixoInicial, palavras) => {
    let palavrasComPrefixoInicial = []

    for (let palavra of palavras) {
        if (palavra.includes(prefixoInicial)) {
            palavrasComPrefixoInicial.push(palavra)
        }
    }
    return palavrasComPrefixoInicial
}

console.log(
    buscarPalavrasSemelhantes2("python", ["javascript", "java", "c++", "pythonico"])
)