/* 
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

let multiplicar = (vetor, num) => {
    let result = []
    for(let i in vetor){
        result.push(vetor[i] * num)
    }
    return result
}

let multiplicarPrimeiro = (vetor, num) => {
    if(vetor.length > 5){
        return multiplicar(vetor, num)
    }else{
        return 'Número de elementos insuficientes!'
    }
}

let vetor = [1, 2, 3, 4, 5, 6]

console.log(multiplicarPrimeiro(vetor, 5))