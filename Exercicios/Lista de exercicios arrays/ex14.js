/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

const indicePar = array => {
    let indicesPares = []
    for(let i = 0; i < array.length; i += 2){
        indicesPares.push(array[i])
    }
    return indicesPares
}

const numsPares = num => {
    if(num % 2 === 0){
        return num
    }
}

let valores = indicePar([2, 3, 4, 6, 7, 9]).filter(numsPares)

console.log(valores)