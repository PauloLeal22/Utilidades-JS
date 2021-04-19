//Crie uma função que dado dois valores(passados como parametros) mostre no console a soma, sub, mult e div deles

function operacoes(n1, n2){
    return{
        soma: n1 + n2,
        sub: n1 - n2,
        mult: n1 * n2,
        div: n1 / n2
    }
}

console.log(operacoes(10, 5))