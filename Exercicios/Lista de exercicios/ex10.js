//Crie uma função que verifica se um número inteiro passado é divisível por 3 e retorne true ou false.

let calcular = (n) => {
    if(n % 3 === 0){
        return true
    }else{
        return false
    }
}

console.log(calcular(33))