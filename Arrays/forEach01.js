//O método forEach percorre o array e retorna uma função criada por você

// Estrutura do forEach -> array.forEach(função(valor, indice, array){return da função})

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

console.log('   ')

aprovados.forEach(nome => console.log(nome))

console.log('   ')

aprovados.forEach((nome, indice) => console.log(indice + 1, nome))

console.log('   ')

const exibir = aprovado => console.log(aprovado)
aprovados.forEach(exibir)