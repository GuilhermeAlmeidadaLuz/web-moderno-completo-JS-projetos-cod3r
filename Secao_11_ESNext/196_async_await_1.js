function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// Deno - runtime do mesmo criador do NodeJS que suporta await direto no arquivo sem usar async
// await esperarPor(3000)  // funciona no Deno

// Ideia do Async Await - código parecer sícrono na leitura, mas executar de forma assíncrona

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20   // com async, equivale a retornar uma promise chamando resolve(20)
}

async function executar() {
    // sem a palavra reservada await, os console.log executariam em sequência pois seriam síncronos, depois a função esperarPor executaria
    
    // await só pode ser usado com funções que retornam promise e dentro de funções assíncronas

    // let valor = await retornarValor()   // depois de 5seg atribui o valor
    let valor = await retornarValorRapido()   // descomentar e comentar a linha de cima - mesma coisa, mas com retorno de outra função assíncrona

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)    
    
    await esperarPor(1500)    
    console.log(`Async/Await ${valor + 1}...`)    
    
    await esperarPor(1500)    
    console.log(`Async/Await ${valor + 2}...`)
    
    return valor + 3
}

// const valorRetornado1 =  executar()   // a função é assíncrona, é esperado uma promisse como retorno
// console.log(valorRetornado1) // Promise { <pending> } 

// const valorRetornado2 = await executar()   // Node não permitia usar await diretamente sem async function (~2017) - Warning (Hoje em dia: 2026)
// console.log(valorRetornado2) //  warning, mas retorna valor corretamente

// executar().then(console.log)    // forma comum de obter o retorno

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()

// Sair do mundo assíncrono para o síncrono (transitar) requer uso do .then