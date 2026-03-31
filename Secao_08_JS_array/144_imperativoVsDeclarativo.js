const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo ('Como' - Passo a Passo de 'como' ser feito é mais importante)
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log('Média das notas:', total1 / alunos.length)

// Declarativo ('O que' - Dizer 'o que' tem que ser feito é mais importante, e as coisas são feitas internamente)
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log('Média das notas:', total2 / alunos.length)

// SQL é declarativo: select codigo, nome, email from clientes where ativo = 1
// Não se preocupa em como o banco fará para percorrer e obter os resultados (detalhes de implementação interna). Apenas o que precisa ser
// feito, ou seja, selecionar os clientes ativos.