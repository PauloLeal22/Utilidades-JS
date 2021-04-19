//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let NumsParesEImpares = (nums) => {
    let pares = nums.filter((nums) => {
        return nums % 2 === 0
    })
    let impares = nums.filter((nums) => {
        return nums % 2 === 1
    })

    return {
        impares,
        pares
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(NumsParesEImpares(nums))