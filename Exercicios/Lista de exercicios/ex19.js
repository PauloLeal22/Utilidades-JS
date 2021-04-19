/*Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

let escolher = (cod, qtd) => {
    let preco = 0
    switch(cod){
        case 100:
            preco = qtd * 3
            break
        case 200:
            preco = qtd * 4
            break
        case 300:
            preco = qtd * 5.50
            break
        case 400:
            preco = qtd * 7.50
            break
        case 500:
            preco = qtd * 3.50
            break
        case 600:
            preco = qtd * 2.80
            break
        default:
            return 'Produto inexistente!'
            break
    }
    return preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

console.log(escolher(400, 3))