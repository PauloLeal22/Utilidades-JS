function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let i = 0

while(opcao != -1){
    i++
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Tentativa ${i}: ${opcao}`)
}

console.log('Fim!')