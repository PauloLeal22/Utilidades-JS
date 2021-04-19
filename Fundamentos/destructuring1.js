const pessoa = {
    nome: 'Ana',
    idade: 18,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

//Remove os atributos "nome" e "idade" do objeto "pessoa"
const {nome, idade} = pessoa
console.log(nome, idade)

//Remove os atributos "nome" e "idade" do objeto "pessoa" e atribui-os às variáveis "n" e "i"
const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

//Remove os atributos "logradouro" e "numero" do objeto "endereco"
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)