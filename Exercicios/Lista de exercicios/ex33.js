/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

const vetorInteiro = [1, 2, 3]
const vetorString = ['a', 'b', 'c']
const vetorDouble = [2.5, 3.9, 5.4]

let result = vetorInteiro.concat(vetorString, vetorDouble)
console.log(result)