const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //Acessar quem é o objeto pai
console.log(ferrari.__proto__ === Object.prototype) //Object.prototype é o pai supremo
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) //Não existe nenhum objeto acima de Object.prototype

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto) 
console.log(Object.prototype, meuObjeto.prototype) //Object é uma função e toda função tem o prototype