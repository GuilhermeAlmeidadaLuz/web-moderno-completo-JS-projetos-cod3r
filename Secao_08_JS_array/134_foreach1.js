const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados = 1
aprovados.forEach(function(nome, indice, lista) {  // (valor, indice, array_completo, ...qualquerCoisa = undefined)
    console.log(`${indice + 1}) ${nome} - ${lista}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)