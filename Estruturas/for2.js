const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 18,
    peso: 64,
    endereco: {
        rua: 'Oliveira Neves',
        numero: 220,
        bairro: 'Jd. Oliveira'
    }
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}