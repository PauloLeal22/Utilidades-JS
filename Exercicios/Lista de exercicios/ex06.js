//Crie 2 funções que recebem 3 parametros(capital inicial, taxa de juros e tempo de aplicação)
//A primeira função retorna o montante da aplicação sob juros simples e a segunda retorna o valor sob juros compostos

let calcularJurosSimples = (c, i, t) => {
    let juros = c * i * t
    return (c + juros).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

let calcularJurosComposto = (c, i, t) => {
    return (c * Math.pow((1 + i), t)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

console.log(calcularJurosSimples(1200, 0.02, 15))
console.log(calcularJurosComposto(10000, 0.10, 3))
console.log(calcularJurosSimples(100, 0.1, 1))