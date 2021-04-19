const pessoa = {
    nome: 'Paulo',
    idade: 18,
    peso: 60
}

//Todas essas funções retornam um array
console.log(Object.keys(pessoa)) //Mostra todos os identificadores
console.log(Object.values(pessoa)) //Mostra todos os valores
console.log(Object.entries(pessoa)) //Transforma cada identificador/valor em um array

//Percorre o array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

//Percorre o array pelo método destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

//Cria atributos de um objeto
Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true, //Permite ser visível na função keys
    writable: false, // Não permite alteração do valor
    value: '01/01/2020' //Atribui um valor
})

pessoa.dataNasc = '05/05/2018'
console.log(pessoa)

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //Pega todos os atributos dos objetos e insere no primeiro objeto
console.log(obj)