/* 
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista, se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

let calcularAltura = (crianca1, crianca2) => {
    let cresCrianca1 = []
    let cresCrianca2 = []
    let ano = 0
    let frase = ''
    if(crianca1.altura >= crianca2.altura){
        if(crianca2.taxa > crianca1.taxa){
            for(let i = 0; i <= 9; i++){
                cresCrianca1.push(crianca1.altura += crianca1.taxa)
                cresCrianca2.push(crianca2.altura += crianca2.taxa)
                if(cresCrianca2[i] > cresCrianca1[i]){
                    ano = i + 1
                    frase = `${crianca2.nome} será maior que ${crianca1.nome} em ${ano} anos.`
                    break
                }
            }
        }else{
            frase = `${crianca2.nome} nunca será maior que ${crianca1.nome}`
        }
    }else if(crianca2.altura >= crianca1.altura){
        if(crianca1.taxa > crianca2.taxa){
            for(let i = 0; i <= 9; i++){
                cresCrianca1.push(crianca1.altura += crianca1.taxa)
                cresCrianca2.push(crianca2.altura += crianca2.taxa)
                if(cresCrianca1[i] > cresCrianca2[i]){
                    ano = i + 1
                    frase = `${crianca1.nome} será maior que ${crianca2.nome} em ${ano} anos.`
                    break
                }
            }
        }else{
            frase = `${crianca1.nome} nunca será maior que ${crianca2.nome}`
        }
    }else if((crianca2.altura === crianca1.altura) && (crianca2.taxa === crianca1.taxa)){
        frase = `${crianca1.nome} e ${crianca2.nome} terão a mesma altura durante toda a vida!`
    }
    return frase
}

const crianca1 = {
    nome: 'Paulo',
    altura: 20,
    taxa: 2
}

const crianca2 = {
    nome: 'Pedro',
    altura: 20,
    taxa: 1
}

console.log(calcularAltura(crianca1, crianca2))