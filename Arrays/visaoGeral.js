// Array é um objeto especial
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Pedro')
console.log(aprovados[4])

aprovados[9] = 'Rafael'
console.log(aprovados)

aprovados[8] = 'Bia'
console.log(aprovados)