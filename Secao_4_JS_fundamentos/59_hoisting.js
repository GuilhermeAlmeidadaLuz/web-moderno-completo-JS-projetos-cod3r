// var a // como se estivesse aqui, ou seja, a foi içada ou jogada para cima pelo interpretador
console.log('a =', a)
var a = 2
console.log('a =', a)

console.log()
function teste() {
    console.log('a =', a)
    var a = 3
    console.log('a =', a)
}

teste()
console.log('a =', a)

console.log()

// com let
// console.log('b =', b)
let b = 2
console.log('b =', b)

console.log()
function teste2() {
    console.log('b =', b)
    let b = 3
    console.log('b =', b)
}

teste2()