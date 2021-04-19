// Usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome //Atributo público
    this.getPrecoComDesc = () => {
        return preco * (1 - desc)
    }
}

const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('Notebook', 2998.99, 0.25)
console.log(prod1.getPrecoComDesc(), prod2.getPrecoComDesc())

// Função factory
function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')
console.log(fromJSON.info)