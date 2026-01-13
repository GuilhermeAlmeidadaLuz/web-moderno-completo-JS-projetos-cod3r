/**
 * DESAFIO - Fazer meu próprio ForEach usando o conhecimento do capítulo
 */


// MINHA SOLUÇÂO (Limitada ao objeto que criei):
console.log('\n' + 'MINHA SOLUÇÂO' + '\n')

const aprovados = { 0: 'Agatha', 1: 'Aldo', 2: 'Daniel', 3: 'Raquel' }

Object.defineProperty(aprovados, 'forEach2', {
    value: function (callback) {
        valores = Object.values(this)
        for (let indice in valores) {
            callback(valores[indice], Number(indice), valores)
        }
    },
    enumerable: false
})

aprovados.forEach2(function (nome, indice, array_completo, outro) {  // (valor, indice, array_completo, ...qualquerCoisa = undefined)
    console.log(`${indice + 1}) ${nome} - ${array_completo}`)
})

// SOLUÇÃO DO PROFESSOR (Mais abrangente):
console.log('\n' + 'SOLUÇÂO do PROFESSOR' + '\n')

const aprovados2 = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEachProfessor = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados2.forEachProfessor( function(nome, indice, array_completo) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array_completo)
} )