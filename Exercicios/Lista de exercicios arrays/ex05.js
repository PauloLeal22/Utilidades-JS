/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

const maiorOuIgual = (num1, num2) => {
    let result
    if(num1 >= num2){
        result = true
    }else{
        result = false
    }
    return result
}

console.log(maiorOuIgual(10, 2))