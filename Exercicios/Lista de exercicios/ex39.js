/*
Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

function trocar(a, b){
    if(a.length === b.length){
        return {
            vetorA: b,
            vetorB: a
        }
    }else{
        return 'Os vetores não possuem o mesmo tamanho!'
    }
}

let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9, 10]

console.log(trocar(vetorA, vetorB))