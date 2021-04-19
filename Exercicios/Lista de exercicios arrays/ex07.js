/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/

const estaEntre = (num, min, max, inclusivo = false) => {
    let result
    if(inclusivo === true){
        if(num >= min && num <= max){
            result = true
        }else{
            result = false
        }
    }else{
        if(num > min && num < max){
            result = true
        }else{
            result = false
        }
    }
    return result
}

console.log(estaEntre(3, 1, 5))
console.log(estaEntre(3, 3, 10))
console.log(estaEntre(3, 3, 10, true))
console.log(estaEntre(1, 5, 10))