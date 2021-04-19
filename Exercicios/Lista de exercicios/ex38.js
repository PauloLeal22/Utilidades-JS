/*
Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

let minEMax = (min = 0, max = 100) => {
    let result = []
    let i = 0
    let x = 0
    if(min > max){
        x = min
        min = max
        max = x
    }else if(max === min){
        min = 0
    }
    while(i < max){
        if(i % 2 != 0){
            result.push(i)
        }
        i++
    }
    return result
}

console.log(minEMax(0, 10))
console.log(minEMax(70, 3))