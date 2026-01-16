const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


// Desafio: mostrar na tela a mulher chinesa com o menor salário

// const paraObjeto = json => JSON.parse(json)  // não usei pois verifiquei que funcionarios[qualquer_indice] é do tipo objeto
const mulherChinesa = pessoa => pessoa.genero === 'F' && pessoa.pais === 'China'
const menorSalario = (pessoaMenorSalario, pessoaAtual) => (pessoaAtual.salario < pessoaMenorSalario.salario) ? pessoaAtual : pessoaMenorSalario

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(typeof funcionarios[0])
    // console.log(funcionarios)
    const mulherChinesaMenorSalario = funcionarios.filter(mulherChinesa).reduce(menorSalario)
    console.log(mulherChinesaMenorSalario)
})