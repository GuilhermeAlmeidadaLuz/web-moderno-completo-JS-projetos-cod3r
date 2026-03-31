function Carro (velocidadeMaxima = 200, delta = 5) {
    // atributo privado (usa-se 'let' ou 'const', pois é escopo desse bloco e interno a ele)
    let velocidadeAtual = 0

    // método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público (usa-se 'this' para que esteja disponível externamente)
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)