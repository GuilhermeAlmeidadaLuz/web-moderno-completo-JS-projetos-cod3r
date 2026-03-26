/**
 * 40) 
 * Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
 * modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
 * conceito B e de 9,0 a 10,0 o conceito A. 
 */

const conceitoDaNota = (notas) => {
    let conceitos = notas.map((nota) => {
        if (nota >= 0 && nota < 5) {
            return 'D'
        } else if (nota >= 5 && nota < 7) {
            return 'C'
        } else if (nota >= 7 && nota < 9) {
            return 'B'
        } else if (nota >= 9 && nota <= 10) {
            return 'A'
        }
    })
    
    return conceitos
}

console.log(conceitoDaNota([4.95, 5, 7.8, 9.3, 0, 2, 8.5]))