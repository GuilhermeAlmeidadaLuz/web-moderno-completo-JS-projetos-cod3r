// promessa
function falarDepoisDe(segundos, frase) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(frase)  // resolve só aceita um parâmetro
            // reject(frase)  // se rejeitar, é capturado pelo catch
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('!?!?'))    // depois de 3seg 'resolve' chama '.then' passando a frase como argumento
    .then(outraFrase => console.log(outraFrase))    // depois de mais 3seg 'resolve' chama '.then' passando a frase como argumento
    .catch(e => console.log(e))     // se tiver algum erro no encadeamento de .then, o fluxo desvia para .catch e o erro é capturado