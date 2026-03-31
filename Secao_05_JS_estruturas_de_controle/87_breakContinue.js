const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break       // desvio de fluxo, interrompendo o laço
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log()

for (y in nums) {
    if (y == 5) {
        continue    // vai para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log()

// não use, se assemelha a 'go to' (difícil manutenção)
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}