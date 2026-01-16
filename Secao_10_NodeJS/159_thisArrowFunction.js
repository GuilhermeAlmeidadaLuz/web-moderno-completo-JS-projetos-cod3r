/**
 * This em Arrow Function
 * Fala, galera. Tudo bom com vocês?
 * 
 * Bom, como vimos na aula anterior, o this em uma “função tradicional” vai apontar para o objeto global:
 */
function functionExpression() {
    console.log('Função:')
    console.log(this == global) // true
    console.log(this == exports)    // false
    console.log(this == module.exports) // false

    console.log(this)
}
functionExpression()
/* Isso não é nenhuma novidade, pois já vimos isso na aula passada. Porém, quando falamos de arrow funcions, a coisa muda um pouco.
 * 
 * Isso porque dentro de uma arrow function, o this não vai apontar mais para o objeto global, e sim para o module.export / exports.
 * 
 * Isso pode causar um pouco de confusão, mas não é nada de outro mundo. Com um pouco mais de estudo você entende perfeitamente esse funcionamento. Vamos ao exemplo?
 */
const arrowFunction = () => {
    console.log('Função Arrow:')
    console.log(this == global)     // false
    console.log(this == exports)    // true
    console.log(this == module.exports) // true

    console.log(this === global)    // false
    console.log(this === module.exports)    // true
}
arrowFunction()
/* É importante que nós tenhamos isso claro em nossa mente. Mas se ainda ficou um pouco confuso, não se preocupe. Esse assunto ainda vai ser muito abordado no curso.
 * 
 * Te convido também a dar uma olhada no nosso blog, lá tem artigos falando sobre isso e muito mais.
 * 
 * Um abraço e bons estudos!
 */