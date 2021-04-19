const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // This serve para uma função possa enxergar algum elemento que está fora dela
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Não enxerga o "saudacao" do objeto pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) // Enxerga o "saudacao" do objeto pessoa
falarDePessoa()