/**
 * 37) 
 * Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
 * como parâmetros um número n (número de termo), ​ a1​ (o primeiro termo) e ​ r​ (a razão) e escreva os ​ n​ termos , 
 * bem como a soma dos elementos. 
 */

const progressaoAritmetica = (n, a1, r) => {
    // let anTermoGeral = a1 + (n - 1) * r

    let vetorPogressaoAritmetica = []
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            vetorPogressaoAritmetica.push(a1)
        } else {
            vetorPogressaoAritmetica.push( a1 + i * r )
        }
    }

    return vetorPogressaoAritmetica
}

const progressaoGeometrica = (n, a1, r) => {
    let vetorProgressaoGeometrica = []
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            vetorProgressaoGeometrica.push(a1)
        } else {
            vetorProgressaoGeometrica.push( a1 * (r ** i) )
        }
    }

    return vetorProgressaoGeometrica
}

console.log(progressaoAritmetica(n = 3, a1 = 4, r = 2))

console.log(progressaoGeometrica(n = 3, a1 = 4, r = 2))