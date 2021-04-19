// Escrever um algoritmo que percorre um vetor de inteiros e conta quantos números negativos há nesse vetor

let consultarNegativos = (nums) => {
    return nums.filter((nums) => nums < 0)
}

const nums = [-1, -2, -3, 0, 4, 6, 7, -38]

console.log(consultarNegativos(nums))