/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
*/

const inverso = vlr => {
    let result
    if(typeof vlr === 'boolean'){
        result = !vlr
    }else if(typeof vlr === 'number'){
        result = -vlr
    }else{
        result = `booleano ou número esperados, mas o parâmetro é do tipo ${typeof vlr}.`
    }
    return result
}

console.log(inverso(4))
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso('Paulo'))
console.log(inverso('3'))
console.log(inverso('true'))
console.log(inverso(!true))