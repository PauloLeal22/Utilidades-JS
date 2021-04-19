//Criação padrão de uma função
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Constante recebe uma função
const imprimirSub = function(a, b) {
    console.log(a - b)
}

imprimirSub(5, 3)

//Criação de função através da arrow
const imprimirMult = (a, b) => {
    return a * b
}

console.log(imprimirMult(2, 3))

//Criação de função com arrow simplificado
const imprimirDiv = (a, b) => a / b

console.log(imprimirDiv(10, 2))