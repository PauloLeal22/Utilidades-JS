/* crie uma função que receba um array com uma quantidade de números e retorne a média simples desses números. */

const calcular = (acumulador, atual) => acumulador + atual

const nums = [3, 6, 9, 2, 7, 4]

const media = nums.reduce(calcular) / nums.length

console.log(media.toFixed(2))