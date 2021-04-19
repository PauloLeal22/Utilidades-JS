const notas = [7.7, 6.2, 5.9, 9.0, 8.4]

//Sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

//Com callback e arrow function
const notasBaixas3 = notas.filter((nota) => nota < 7)

console.log(`Sem callback: ${notasBaixas}`)
console.log(`Com callback: ${notasBaixas2}`)
console.log(`Com callback e arrow: ${notasBaixas3}`)