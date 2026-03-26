/**
 * 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
 * crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
 * quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

function verificaCrescimentoCriancas(alturas, taxasCrescimentoAnual) {
    if (alturas[0] !== alturas[1]) {
        let criancaMenor = {}
        let criancaMaior = {}
        
        if (alturas[0] < alturas[1]) {
            criancaMenor = {altura: alturas[0], taxaCrescimentoAnual: taxasCrescimentoAnual[0]}
            criancaMaior = {altura: alturas[1], taxaCrescimentoAnual: taxasCrescimentoAnual[1]}
        } else {
            criancaMenor = {altura: alturas[1], taxaCrescimentoAnual: taxasCrescimentoAnual[1]}
            criancaMaior = {altura: alturas[0], taxaCrescimentoAnual: taxasCrescimentoAnual[0]}
        }
        
        let contagemAnos = 0
        let ultrapassouAltura = false
        while (criancaMenor.altura < criancaMaior.altura) {
            
            criancaMenor.altura = criancaMenor.altura * criancaMenor.taxaCrescimentoAnual
            criancaMaior.altura = criancaMaior.altura * criancaMaior.taxaCrescimentoAnual

            contagemAnos += 1
            
            if (criancaMenor.altura > criancaMaior.altura) {
                ultrapassouAltura = true
                break
            }
            else if (contagemAnos === 10) {
                // limite de tempo para tentar ultrapassar, já que não serão crianças para sempre
                break
            } 
        }

        if (ultrapassouAltura) {
            return `Criança menor (${criancaMenor.altura.toFixed(3)} cm) ultrapassou a Criança maior (${criancaMaior.altura.toFixed(3)} cm) - Tempo decorrido: ${contagemAnos} anos`
        } else {
            return `Criança menor (${criancaMenor.altura.toFixed(3)} cm) não ultrapassou a Criança maior (${criancaMaior.altura.toFixed(3)} cm) - Tempo decorrido: ${contagemAnos} anos`
        }
    }
    else {
        if (taxasCrescimentoAnual[0] == taxasCrescimentoAnual[1]) {
            return 'Crianças possuem mesma altura e taxa de crescimento'  
        } else if ( taxasCrescimentoAnual[0] < taxasCrescimentoAnual[1]) {
            return 'Criança 2 ultrapassará Criança 1 em 1 ano'
        } else {
            return 'Criança 1 ultrapassará Criança 2 em 1 ano'
        }
    }
}

let resultado = verificaCrescimentoCriancas([100, 130], [1.2, 1.05])
console.log(resultado)

console.log(verificaCrescimentoCriancas([100, 180], [1.05, 1.02]))
console.log(verificaCrescimentoCriancas([120, 140], [1.02, 1.10]))


console.log(verificaCrescimentoCriancas([130, 130], [1.05, 1.05]))

console.log(verificaCrescimentoCriancas([130, 130], [1.05, 1.10]))
console.log(verificaCrescimentoCriancas([130, 130], [1.15, 1.05]))