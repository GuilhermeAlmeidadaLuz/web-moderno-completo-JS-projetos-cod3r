// forma 1 - criação dinâmica
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40  // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    // obj: {
    //     blabla: 1,
    //     obj:{
    //         blabla: 2
    //     }
    // }
}

// prod2['Desconto Legal'] = 0.40  // evitar atributos com espaço

/**
 * Json ou JavaScript Object Notation (Json != Objeto)
 * Formato textual para troca de dados entre sistemas
 * Interoperabilidade entre sistemas, para que se comuniquem
 * Tem Atributos e Comportamentos (métodos) em código
 */

console.log(prod2)
