function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) { // ou .keys para que o for percorra a quantidade certa 
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros  // retorno dentro de uma função assíncrona significa o resolve da promise
    } catch(e) {
        if (tentativas > 100) {
            throw "Não deu certo!"  // lançamento de exceção dentro de uma função assíncrona significa o reject da promise
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)