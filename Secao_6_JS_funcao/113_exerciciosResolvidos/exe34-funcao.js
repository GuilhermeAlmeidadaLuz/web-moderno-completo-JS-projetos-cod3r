/**
 * 34)
 * Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
 * todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. 
 */

const mesmoTamanho = (string1, string2) => string1.length === string2.length    // retorna true ou false

const maiorString = (string1, string2) => string1.length > string2.length ? string1 : string2   // retorna string maior

const menorString = (string1, string2) => string1.length < string2.length ? string1 : string2   // retorna string menor

function caracteresIguaisEmAmbas(string1, string2) {
    let tamanhoIgual = mesmoTamanho(string1.trim(), string2.trim())
    let stringBaseMinuscula
    let stringParaCompararMinuscula

    if (tamanhoIgual) {
        stringBaseMinuscula = string1.trim().toLowerCase()
        stringParaCompararMinuscula = string2.trim().toLowerCase()
    } else {
        stringBaseMinuscula = maiorString(string1.trim(), string2.trim()) . toLowerCase()
        stringParaCompararMinuscula = menorString(string1.trim(), string2.trim()) . toLowerCase()
    }

    let mesmosCaracteres = true
    let posicaoEncontrada

    for (let i = 0; i < stringBaseMinuscula.length; i++) {
        posicaoEncontrada = stringParaCompararMinuscula.indexOf(stringBaseMinuscula[i])
        // console.log("pos encont:",posicaoEncontrada)
        
        if (posicaoEncontrada === -1) {
            mesmosCaracteres = false
            return mesmosCaracteres
        } else {
            caracter = stringParaCompararMinuscula.at(posicaoEncontrada)
            // console.log("caracter:", caracter)
            stringParaCompararMinuscula = stringParaCompararMinuscula.replace( caracter , '' )
            // console.log(stringParaCompararMinuscula)

        }
    }
    return mesmosCaracteres
}

console.log(caracteresIguaisEmAmbas('casa', 'ascaa'))
console.log(caracteresIguaisEmAmbas('casa', 'asca'))
console.log(caracteresIguaisEmAmbas('casa', 'ascaa'))
console.log(caracteresIguaisEmAmbas('carro', 'carro'))
console.log(caracteresIguaisEmAmbas('carro', 'crroa'))

console.log(caracteresIguaisEmAmbas('abcdf', 'dcba'))