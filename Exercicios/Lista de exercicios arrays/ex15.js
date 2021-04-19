/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums.reduce(function(acumulador, atual){
    return acumulador + atual
}))