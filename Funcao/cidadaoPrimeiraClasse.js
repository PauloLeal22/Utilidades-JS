//Criação literal de função 
function fun1(){}

//Armazenar em uma variável
const fun2 = function(){}

//Armazenar em um array
const fun3 = [function(a, b){return a + b}]
console.log(fun3[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'oi'}
console.log(obj.falar())

//Passar uma função como parâmetro
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})

//Função pode retornar uma outra função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)

//Criação de função através da arrow
const fun4 = (a, b) => {
    return a * b
}
console.log(fun4(2, 3))

//Criação de função com arrow simplificado
const imprimirDiv = (a, b) => a / b