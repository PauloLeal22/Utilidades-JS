/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.
*/

const transformarEmArray = obj => Object.entries(obj)

console.log(transformarEmArray({nome: 'Paulo', sobrenome: 'Leal', idade: 18}))