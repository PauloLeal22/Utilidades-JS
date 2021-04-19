/* Crie uma função que receba um array de produtos e retorne o total das despesas. */

const produtos = [
    {nome: "Redmi Note 7", categoria: "Eletronicos", preco: 799.90},
    {nome: "Notebook Dell", categoria: "Eletronicos", preco: 4150.90},
    {nome: "Redmi Airdots", categoria: "Eletronicos", preco: 199.90}
]

const getPrecos = produto => produto.preco
const calcularTotal = (acumulador, atual) => acumulador + atual

const venda1 = produtos.map(getPrecos).reduce(calcularTotal)

console.log(venda1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))