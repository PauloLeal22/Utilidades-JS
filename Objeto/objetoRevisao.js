// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['Marca'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca']

console.log(produto)
console.log(typeof produto) // Object