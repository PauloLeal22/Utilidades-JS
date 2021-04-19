/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

const selecionarNums = valor => {
    if(typeof valor === 'number'){
        return valor
    }
}

const array = [1, 'Paulo', [], 4, 8, '3']

console.log(array.filter(selecionarNums))