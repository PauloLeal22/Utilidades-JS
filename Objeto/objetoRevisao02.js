// Objeto pode ter tipos primitivos, objetos, arrays e até mesmo funções!
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Paulo',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Bianca',
            idade: 18
        },
        {
            nome: 'Daiane',
            idade: 25
        }
    ],
    calcularValorSeguro: function (){
        //...
    }
}

carro.proprietario.endereco.numero = 121
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores[0]
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)