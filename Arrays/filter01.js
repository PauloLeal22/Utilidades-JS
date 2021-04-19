//Esse método cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
function numerosMaiores10(item){
    return item >= 10
}
let nums = [0, 5, 10, 15, 20, 25].filter(numerosMaiores10)
console.log(nums)

function nomesComA(item){
    return item.indexOf('p')
}
let nomes = ['ana', 'paulo', 'alberto', 'pedro', 'alice'].filter(nomesComA)
console.log(nomes)