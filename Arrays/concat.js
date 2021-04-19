// Esse método retorna um novo array contendo todos os arrays ou valores passados como parâmetro
let meninas = ['Ana', 'Bia', 'Maria', 'Gabi']
let meninos = ['Paulo', 'Gabriel', 'Pedro', 'João']
let grupo = meninos.concat(meninas)
console.log(grupo)

let num1 = [1,2,3]
let num2 = [4, 5, 6]
let num3 = [7, 8, 9]
let nums = num1.concat(num2, num3)
console.log(nums)

let nome = ['Paulo']
let sobrenome = ['Leal']
let idade = 18
let dados = nome.concat(sobrenome, `${idade} anos`)
console.log(dados)
