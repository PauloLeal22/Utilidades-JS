/* Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

const buscar = (palavraChave, array) => {
    let result = []
    for(let i = 0; i < array.length; i++){
        if(array[i].split(palavraChave).length >= 2){
            result.push(array[i])
        }
    }
    return result
}

const palavras = ['programação', 'javascript', 'java', 'mobile', 'programas']

console.log(buscar('pro', palavras))