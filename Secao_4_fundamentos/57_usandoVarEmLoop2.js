const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()      // resultado é 10
funcs[8]()      // resultado é 10
// porque var não tem escopo de função
console.log(funcs[0]())     // retorno undefined

// Visualizando o comportamento de var

function teste () {
    console.log(j)
}
var j

console.log('\nExecutando função teste...')
teste()
j = 19
teste()