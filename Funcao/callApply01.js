// Call e Apply são métodos de chamar uma funçã
// Call chama uma função passando primeiro o objeto e depois os parametros adicionais
// Apply chama uma função passando primeiro o objeto e depois apenas 1 parâmetro adicional, podendo ser um array

// Estrutura call -> função.call(objeto, arg1, arg2, arg3...)
// Estrutura apply -> função.apply(objeto, [arg1, arg2, arg3...])

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// Chamada normal de uma função
console.log(produto.getPreco())

const carro = {
    preco: 10200,
    desc: 0.20
}

// Chamando a função getPreco passando apenas o objeto
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Chamando a função getPreço passando o objeto e os argumentos
console.log(getPreco.call(carro, 0.15, '$'))
console.log(getPreco.apply(carro, [0.15, '$']))