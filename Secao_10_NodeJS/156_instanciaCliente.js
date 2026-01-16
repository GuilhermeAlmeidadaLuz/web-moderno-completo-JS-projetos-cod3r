const contadorA = require('./156_instanciaUnica')
const contadorB = require('./156_instanciaUnica')

const contadorC = require('./156_instanciaNova')()
const contadorD = require('./156_instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)