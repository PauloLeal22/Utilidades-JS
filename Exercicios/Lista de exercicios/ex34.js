/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

let separar = (string1, string2) => {
    let palavra1 = string1.split("")
    let palavra2 = string2.split("")
    palavra1.sort()
    palavra2.sort()
    let result = []
    if(palavra1.length >= palavra2.length){
        for(let i in palavra1){
            if(palavra1.indexOf(palavra2[i])){
                return palavra1.indexOf(palavra2[i])
            }else{
                result.push(false)
            }
        }
    }else if(palavra2.length > palavra1.length){
        if(palavra2.indexOf(palavra1[i])){
            result.push(true)
        }else{
            result.push(false)
        }
    }
    return result
}

console.log(separar('Paulos', 'Paulo'))