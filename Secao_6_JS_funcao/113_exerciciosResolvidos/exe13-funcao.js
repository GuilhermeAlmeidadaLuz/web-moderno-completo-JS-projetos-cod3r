/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
 * dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
 */

const diasDaSemana = {
    'Domingo': 1,
    'Segunda': 2,
    'Terça': 3,
    'Quarta': 4,
    'Quinta': 5,
    'Sexta': 6,
    'Sábado': 7
}

const verificaDiaDaSemana = (dia) => {
    switch(dia) {
        case 1:
            console.log('Fim de semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia útil')
            break
        case 7:
            console.log('Fim de semana')
            break
        default:
            console.log('Dia inválido')

    }
}

// const diasEmNumero = Object.keys(diasDaSemana).map((dia) => Number(dia))

verificaDiaDaSemana(diasDaSemana['Domingo'])
verificaDiaDaSemana(diasDaSemana['Segunda'])
verificaDiaDaSemana(diasDaSemana['Terça'])
verificaDiaDaSemana(diasDaSemana['Quarta'])
verificaDiaDaSemana(diasDaSemana['Quinta'])
verificaDiaDaSemana(diasDaSemana['Sexta'])
verificaDiaDaSemana(diasDaSemana['Sábado'])

verificaDiaDaSemana(0)
verificaDiaDaSemana(8)
verificaDiaDaSemana('b')