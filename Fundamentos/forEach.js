let nomes = ['Ana', 'Bia', 'Gabi', 'Fer']
function imprimirNomes(item){
    console.log(item)
}
nomes.forEach(imprimirNomes)

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function tabuadaDo2(item){
    console.log(item*2)
}
numeros.forEach(tabuadaDo2)

let marcas = ['Ford', 'Toyota', 'Ferrari', 'Volkswagen', 'Fiat']
let marcasComF = []
let indice = 0
function imprimirMarcasComF(item, indice){
    if (marcas[indice].indexOf("F") == 0) {
        marcasComF.push(marcas[indice])
        indice++
    }
}
marcas.forEach(imprimirMarcasComF)
console.log(marcasComF)