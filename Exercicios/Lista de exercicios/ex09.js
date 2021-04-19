//Crie uma função que recebe a nota do aluno, se for menor que 38 ele é reprovado, se a diferença entre a nota e 
//o próximo divisor de 5 for menor que 3 a nota arredonda para o próximo divisor de 5

function calcularNota(nota){
    if(nota < 38){
        return 'Aluno reprovado!'
    }else if(nota > 100){
        return 'Nota inválida!'
    }else{
        if((nota % 5) >= 3){
            return nota - (nota % 5) + 5
        }else{
            return nota - (nota % 5)
        }
    }
}

console.log(calcularNota(42))