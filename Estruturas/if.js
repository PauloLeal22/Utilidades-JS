function calcularMedia(nota){
    if(nota <= 4){
        console.log('Reprovado')
    } else if(nota == 5){
        console.log('Aprovado com nota mínima')
    } else if(nota > 5 && nota <= 9){
        console.log('Aprovado com nota satisfatória')
    } else if(nota == 10){
        console.log('Aprovado com nota máxima')
    } else{
        console.log('Valor inválido')
    }
}

calcularMedia(2)
calcularMedia(4)
calcularMedia(5)
calcularMedia(7)
calcularMedia(9)
calcularMedia(10)