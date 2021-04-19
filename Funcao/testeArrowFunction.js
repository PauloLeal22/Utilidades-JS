// Arrow Function normal
let nomes = []
let inserirNomes = (nome) => {
    return nomes.push(nome)
}

inserirNomes('Paulo')
inserirNomes('Gabriel')
inserirNomes('Caio')
inserirNomes('Pedro')
inserirNomes('Luiz')

console.log(nomes)

// Arrow Function resumida
let nomesFemininos = []
let inserirNomesFemininos = (nome) => nomesFemininos.push(nome)

inserirNomesFemininos('Paula')
inserirNomesFemininos('Gabriela')
inserirNomesFemininos('Bia')
inserirNomesFemininos('Beatriz')
inserirNomesFemininos('Fer')

console.log(nomesFemininos)