//Fazer um programa para encontrar todos os pares entre 1 e 100.

let encontrarPares = () => {
    for(let i = 0; i < 101; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

encontrarPares()