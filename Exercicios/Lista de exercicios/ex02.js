//Crie uma função que recebe os 3 lados de um triangulo e retorne sua classificação

function triangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado3 === lado1){
        return 'Triângulo Equilátero'
    }else if(lado1 === lado2 && lado3 != lado1 || lado1 === lado3 && lado2 != lado1 || lado2 === lado3 && lado1 != lado2){
        return 'Triângulo Isósceles'
    }else if(lado1 != lado2 && lado3 != lado1 && lado2 != lado3){
        return 'Triângulo Escaleno'
    }else{
        return 'Triângulo não identificado'
    }
}

console.log(triangulo(1, 1, 1))
console.log(triangulo(4, 1, 1))
console.log(triangulo(1, 2, 3))