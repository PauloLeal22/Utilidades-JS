/*
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/

const descobrirMes = num => {
    let mes = ''
    switch(num){
        case 1:
            mes = 'janeiro'
            break
        case 2:
            mes = 'Fevereiro'
            break
        case 3:
            mes = 'Março'
            break
        case 4:
            mes = 'Abril'
            break
        case 5:
            mes = 'Maio'
            break
        case 6:
            mes = 'Junho'
            break
        case 7:
            mes = 'Julho'
            break
        case 8:
            mes = 'Agosto'
            break
        case 9:
            mes = 'Setembro'
            break
        case 10:
            mes = 'Outubro'
            break
        case 11:
            mes = 'Novembro'
            break
        case 12:
            mes = 'Dezembro'
            break
        default:
            mes = 'Mês não identificado!'
            break
    }
    return mes
}

console.log(descobrirMes(3))