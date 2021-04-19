/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações
*/

let verificarNums = (nums) => {
    let intervalo = []
    let demais = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= 10 && nums[i] <= 20){
            intervalo.push(nums[i])
        }else{
            demais.push(nums[i])
        }
    }
    return {
        intervalo,
        demais
    }
}

const nums = [1, 5, 7, 10, 14, 17, 19, 20, 26, 45, 78]

console.log(verificarNums(nums))