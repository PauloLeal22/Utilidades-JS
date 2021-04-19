Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

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

const resultado = carrinho.map2(transformarObjeto).map2(pegarPreco)
console.log(resultado)