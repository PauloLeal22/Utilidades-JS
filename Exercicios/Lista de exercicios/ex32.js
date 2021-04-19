// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let calcularMedia = (nums) => {
    let media = 0
    for(let i in nums){
        media += nums[i]
    }
    return media / nums.length
}

const nums = [10, 7, 9, 4]

console.log(calcularMedia(nums))