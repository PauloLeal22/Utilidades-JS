const objetoPai = {
    nome: 'Pedro',
    olho: 'Castanho',
    cabelo: 'Marrom',
    status(){
        return `${this.nome} tem cabelo ${this.cabelo} e olho ${this.olho}`
    }
}

const filha1 = Object.create(objetoPai, {
    nome: {value: 'Renata'},
    cabelo: {value: 'Preto'}
})

const filha2 = Object.create(objetoPai, {
    nome: {value: 'Bia', writable: false, enumerable: true},
    olho : {value: 'verde', writable: false, enumerable: true},
    cabelo: {value: 'Castanho claro', writable: true, enumerable: true}
})

const filha3 = {
    __proto__: objetoPai,
    nome: 'Gabi',
}

const filha4 = {
    nome: 'Paula',
    olho: 'Preto',
    cabelo: 'Loiro'
}

Object.setPrototypeOf(filha4, objetoPai)

console.log(filha4.status())