/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A
*/

let conceitos = (notas) => {
    let result = []
    for(let i in notas){
        if(notas[i] >= 0.0 && notas[i] <= 4.9){
            result.push('D')
        }else if(notas[i] >= 5.0 && notas[i] <= 6.9){
            result.push('C')
        }else if(notas[i] >= 7.0 && notas[i] <= 8.9){
            result.push('B')
        }else if(notas[i] >= 9.0 && notas[i] <= 10){
            result.push('A')
        }
    }
    return result
}

const notas = [3.4, 5.7, 7, 9.9]

console.log(conceitos(notas))