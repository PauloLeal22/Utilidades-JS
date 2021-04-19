//Crie uma função que retorne o maior e menor ponto dasd partidas de basquete de um jogador

function compararResultados(lista, jogo){  
    let maior = 0
    lista.push(jogo)
    if(lista.length > 1){        
        for(let i in lista){
            if(lista[i] > lista[i - 1]){
                maior = lista[i]
            }
        }
        let menor = 0
        lista.sort()
        menor = lista[0]
        return {
            menor,
            maior
        }
    }else{
        lista.push(jogo)
        return 'Resultado cadastrado!'
    }
}

const lista = [12, 06, 02, 06, 09]

console.log(compararResultados(lista, 15))