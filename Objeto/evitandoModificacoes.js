// Object.preventExtensions -> proíbe a adição de novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal -> proíbe a adição e exclusão de atributos
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.cabelo = 'Preto'
delete pessoa.nome
console.log(pessoa)

// Object.freeze -> proíbe a adição, exclusão e modificação dos atributos
const aluno = {
    nome: 'Paulo',
    nota: 10,
    serie: 3
}

Object.freeze(aluno)
console.log('Freezado:', Object.isFrozen(aluno))
aluno.altura = 1.70
delete aluno.nome
aluno.serie = 9
console.log(aluno)