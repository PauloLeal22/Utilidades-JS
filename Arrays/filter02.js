const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil === true
}))

let isCaro = produto => produto.preco >= 500
let isFragil = produto => produto.fragil

let result = produtos.filter(isCaro).filter(isFragil)

console.log(result)