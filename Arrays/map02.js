const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const calcularPreco = carrinho.map(e => {
    let conversao = JSON.parse(e)
    return conversao.preco
})

console.log(calcularPreco)

// Segundo método
const transformarObjeto = json => JSON.parse(json)
const pegarPreco = produto => produto.preco

const resultado = carrinho.map(transformarObjeto).map(pegarPreco)
console.log(resultado)