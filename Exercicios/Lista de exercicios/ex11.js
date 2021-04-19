//Crie uma função que recebe um ano e calcula se ele é ano bissexto

let calcular = (ano) => {
    if(ano % 4 === 0){
        return true
    }else{
        return false
    }
}

console.log(calcular(2024))