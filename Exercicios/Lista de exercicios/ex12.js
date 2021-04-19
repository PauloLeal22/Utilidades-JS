//Faça um algoritmo que calcule o fatorial de um número.

function calcular(n){
    let fat = [n]
    let i = n
    let result = n
    while(i > 1){
        fat.push(i - 1)
        i--
    }
    i = n - 1
    while(i > 1){
        result *= i
        i--
    }
    return result
}

console.log(calcular(12))