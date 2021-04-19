/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
A: 10%, B: 15%, C: 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

let calcular = (salario, plano) => {
    switch(plano){
        case 'a':
            return salario + (salario * 0.10)
            break
        case 'b':
            return salario + (salario * 0.15)
            break
        case 'c':
            return salario + (salario * 0.20)
            break
    }
}

console.log(calcular(1000, 'c'))