const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

/** -----------------------------------------------------------------------------------------------------------
 *          Desafio 1: Todos os alunos são bolsistas?
 * 
 * ---------------- Minha Solução: -------------------
 * como se fizesse um 'and' entre todos os atributos 'bolsista' dos alunos */

const todosBolsistas = alunos.map(aluno => aluno.bolsista).reduce(function(anterior, atual) {
    return anterior && atual    // no acúmulo de booleanos, só será verdadeiro ao final se todos forem 'true'
})
console.log('Todos os alunos Bolsistas?', todosBolsistas)
 
// ---------------------- Solução do Professor: ----------------------------
const todosBolsistasDoProf = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistasDoProf))
// ------------------------------------------------------------------------

/** ------------------------------------------------------------------------------------------------
 * 
 *          Desafio 2: Algum aluno é bolsista?
 * 
 * ----------------- Minha Solução ----------------------
 * como se fizesse um 'ou' entre todos os atributos 'bolsista' dos alunos */
// 
const algumBolsista = alunos.map(aluno => aluno.bolsista).reduce(function(anterior, atual) {
    return anterior || atual    // no acúmulo de booleanas, será verdadeiro se pelo menos um for 'true'
})
console.log('Algum aluno bolsista?', algumBolsista)

// -------------------- Solução do Professor: ---------------
const algumBolsistaDoProf = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistaDoProf))