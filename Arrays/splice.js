// Splice pode excluir e adicionar elementos em um array

// Estrutura do Splice -> array.splice(a partir, qtd a excluir, adicionar, adicionar)

let aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)

aprovados.splice(1, 2, 'Pedro', 'Paulo')
console.log(aprovados)

aprovados.splice(1, 0, 'Rafael')
console.log(aprovados)