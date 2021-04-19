function criarProduto(nome, preco){
    return{
        nome: nome,
        preco: preco,
        desconto: 0.1,
        precoFinal: preco - (preco * 0.10)
    }
}

console.log(criarProduto('Bola de Futebol', 100))