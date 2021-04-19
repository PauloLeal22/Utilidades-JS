//Função construtora
function CriarVenda(prod, valor, qtd){
    this.produto = prod
    this.valor = valor
    this.quantidade = qtd
    this.valorFinal = function(){
        return valor * qtd
    }
}

const venda1 = new CriarVenda('Notebook Dell', 2990.90, 2)
venda1.valorFinal()
console.log('Função Construtora')
console.log(`Produto: ${venda1.produto}, quantidade: ${venda1.quantidade}, total: ${venda1.valorFinal()}`)


//Função factory
function criarVendaFactory(prod, valor, qtd){
    return{
        prod,
        valor,
        qtd,
        valorFinal: valor * qtd
    }
}

const venda2 = criarVendaFactory('Notebook Lenovo', 2988.90, 1)
console.log('Função Factory')
console.log(`Produto: ${venda2.prod}, quantidade: ${venda2.qtd}, total: ${venda2.valorFinal}`)