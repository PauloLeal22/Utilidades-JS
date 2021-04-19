/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array
*/

const primeiroEUltimo = array => [array[0], array[array.length - 1]]

console.log(primeiroEUltimo([1, 2, 3, 4, 5]))