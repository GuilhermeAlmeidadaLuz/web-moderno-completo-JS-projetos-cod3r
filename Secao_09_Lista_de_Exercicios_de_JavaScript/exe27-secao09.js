/**
 * 27) Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
 * objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
 * exemplo a seguir:
 * 
 * Exemplos:
 * 
 * inverter({ a: 1, b: 2, c: 3})    // retornará { 1: "a", 2: "b", 3: "c"}
 */


function inverter(objeto) {
    let novoObjeto = {}

    for (key in objeto) {
        let valor = objeto[key]
        novoObjeto[valor] = key
    }
    return novoObjeto

    // Outras alternativas:

    // arrayDeParChaveValor = Object.entries(objeto)
    // arrayDeParChaveValor.forEach((parChaveValor) => {
    //     const [valor, chave] = parChaveValor
    //     novoObjeto[chave] = valor
    // })

    
    // for ([chave, valor] of Object.entries(objeto)) {
    //     novoObjeto[valor] = chave
    // }


}

console.log(
    inverter({ a: 1, b: 2, c: 3})    // retornará { 1: "a", 2: "b", 3: "c"}
)