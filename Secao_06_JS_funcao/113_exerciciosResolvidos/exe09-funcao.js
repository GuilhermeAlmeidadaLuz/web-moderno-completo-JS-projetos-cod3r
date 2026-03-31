/**
 * 09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de 
 * classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas 
 * possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor 
 * que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum 
 * arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 
 * 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou 
 * seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 
 * e o aluno será aprovado. 
 */

const arredondaEverificaNotasAprovadas = nota => {
    const notaMinima = 40   // deve ser múltiplo de 5 para que o laço for funcione corretamente com a regra de negócio
    const diferencaParaMultiploDeCinco = 3
    let status
    let novaNota

    if (nota < notaMinima) {
        novaNota = (Math.abs(notaMinima - nota) < diferencaParaMultiploDeCinco) ? notaMinima : nota
        status = (novaNota >= notaMinima) ? 'Aprovado' : 'Reprovado'
    } else {
        status = 'Aprovado'
        for (multiploDeCinco = notaMinima + 5; multiploDeCinco <= 100; multiploDeCinco += 5) {
            if (nota < multiploDeCinco) {
                novaNota = (Math.abs(multiploDeCinco - nota) < diferencaParaMultiploDeCinco) ? multiploDeCinco : nota
                break
            }
        }
    }
    return `Nota: ${nota} --- Nota Final: ${novaNota} --- Status: ${status}`
}

console.log(arredondaEverificaNotasAprovadas(20))
console.log(arredondaEverificaNotasAprovadas(36))
console.log(arredondaEverificaNotasAprovadas(37))
console.log(arredondaEverificaNotasAprovadas(38))
console.log(arredondaEverificaNotasAprovadas(40))
console.log(arredondaEverificaNotasAprovadas(41))
console.log(arredondaEverificaNotasAprovadas(43))
console.log(arredondaEverificaNotasAprovadas(80))
console.log(arredondaEverificaNotasAprovadas(87))
console.log(arredondaEverificaNotasAprovadas(93))
console.log(arredondaEverificaNotasAprovadas(98))