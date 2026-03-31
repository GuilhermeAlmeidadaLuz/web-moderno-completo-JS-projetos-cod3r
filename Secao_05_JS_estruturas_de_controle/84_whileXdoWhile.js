function getInteiroAleatorioEntre(min, max) {
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao       // somente declarada a variável, sem valor inicial!

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)