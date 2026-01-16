let a = 2 // visível apenas dentro do módulo

module.exports = {  // visível fora do módulo
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa Noite'
    }
}