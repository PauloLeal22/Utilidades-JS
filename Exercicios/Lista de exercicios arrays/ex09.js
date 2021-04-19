/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

const formarString = num => {
    let string = ''
    for(let i = 1; i <= num; i++){
        string += '+'
    }
    return string
}

console.log(formarString(4))