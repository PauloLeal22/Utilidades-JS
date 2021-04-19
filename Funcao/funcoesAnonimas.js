const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(1, 2)
imprimirResultado(1, 2, soma)
imprimirResultado(5, 3, function(x, y){return x - y})
imprimirResultado(10, 2, (x, y) => x / y)

const pessoa = {
    falar: function(){
        console.log('Eu sou uma função anônima dentro de um objeto :D')
    }
}

pessoa.falar()

const eu = {
    falar: () => 'Eu sou uma arrow function dentro de um objeto :D'
}

console.log(eu.falar())