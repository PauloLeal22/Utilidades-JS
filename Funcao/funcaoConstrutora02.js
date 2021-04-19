// Função que serve como "molde" para as outras funções
function Cliente(nome, cpf, compra){
    //Metodo privado
    let valor = 0

    //Metodo publico
    this.nome = nome
    this.cpf = cpf
    this.valorCompra = function(){
        if(compra === 'Camisa Polo'){
            valor = 230.70
        }else if(compra === 'Chuteira Nike'){
            valor = 450.90
        }else if(compra === 'Calção Adidas'){
            valor = 89.90
        }else{
            valor = 'Produto não identificado!'
        }
    }

    this.getValor = function(){
        return valor
    }
}

const cliente1 = new Cliente('Paulo', '123.456.678-9', 'Chuteira Nike')
cliente1.valorCompra() //Consulta qual o produto comprado
console.log(`${cliente1.nome}, CPF: ${cliente1.cpf}, Valor gasto: ${cliente1.getValor()}.`)