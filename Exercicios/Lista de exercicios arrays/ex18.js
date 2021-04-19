/* Criar uma função que receba um array de números e retorne o menor número desse array. */

let menor = function(array) {
    return Math.min.apply(Math, array)
}

console.log(menor([3, 6, 8, 1, 10]))