// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let menor = function(array) {
    return Math.min.apply(Math, array)
}

let maior = function(array) {
    return Math.max.apply(Math, array)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(menor(nums))
console.log(maior(nums))