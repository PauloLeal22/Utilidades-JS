/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
*/

const contarCaractere = (string, caractere) => {
    let letras = string.split("")
    let result = []
    for(let i = 0; i < letras.length; i++){
        if(letras[i] === caractere){
            result.push(letras[i])
        }
    }
    return result.length
}

console.log(contarCaractere('Paulo Leal', 'a'))
