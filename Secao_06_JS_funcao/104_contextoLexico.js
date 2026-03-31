const valor = 'Global'

function minhaFuncao() {
        console.log(valor)
}

function exec() {
    const valor = 'Local'
    
    /*function minhaFuncao() {
        console.log(valor)
    }*/

    minhaFuncao()
}

exec()