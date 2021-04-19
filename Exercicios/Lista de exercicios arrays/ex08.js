/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

const repeticao = (vlr, vezes) => {
    let array = []
    for(let i = 1; i <= vezes; i++){
        array.push(vlr)
    }
    return array
}

console.log(repeticao('Paulo', 7))