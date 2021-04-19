const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento ao primeiro indice
console.log(pilotos)

//Splice pode adicionar e remover elementos
//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1) //Massa quebrou o carro :(
console.log(pilotos)

// Slice cria um novo array com os elementos a partir do que foi declarado
const algunsPilotos1 = pilotos.slice(2) //Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)