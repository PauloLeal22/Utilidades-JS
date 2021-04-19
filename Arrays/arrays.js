const valores = [ 7.7, 8.9, 9.2]
console.log(valores[2])

valores[3] = 10
console.log(valores)
console.log(valores.length)

valores.push('olá') //Adiciona um elemento ao array
console.log(valores)

console.log(valores.pop()) //Remove o ultimo elemento do array
console.log(valores)

delete valores[0] //Remove um elemento do array
console.log(valores)