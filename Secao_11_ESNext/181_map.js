const tecnologias = new Map()
tecnologias.set('react', { framework: false })  // chave, valor
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get("react"))

console.log()

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')    // sobrescreve valor pois não permite criar com a mesma chave
chavesVariadas.set(456, 'b')    // permite criar, pois chave é diferente
console.log(chavesVariadas)