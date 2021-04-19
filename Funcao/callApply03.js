// CALL SEM PARAMETROS ADICIONAIS
function getPreco(){
    return this.preco - (this.preco * this.desc)
}

const produto1 = {
    nome: 'Chuteira Nike',
    preco: 239.00,
    desc: 0.1,
    getPreco
}

console.log(getPreco.call(produto1))

// CALL COM PARAMETROS ADICIONAIS
const produto2 = {
    nome: 'Chuteira Nike',
    preco: 239.00,
    desc: 0.1,
    getPrecoEspecial
}

function getPrecoEspecial(isVip){
    if(isVip){
        return this.preco - (this.preco * (this.desc * 2))
    }else{
        return this.preco - (this.preco * this.desc)
    }
}

console.log(getPrecoEspecial.call(produto2, true))