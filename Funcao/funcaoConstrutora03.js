function Produto(quantidade){
    this.estoque = function(){
        if(quantidade <= 10){
            return 'estoque mínimo foi atingido!'
        }else if(quantidade > 10 && quantidade < 20){
            return 'estoque ok!'
        }else if(quantidade === 20){
            return 'estoque máximo foi atingido!'
        }
    }
}

const produto1 = new Produto(13)
produto1.estoque()
console.log(produto1.estoque())