//Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido

let calcular = (dia) => {
    switch(dia){
        case 1: case 2:
            return 'Fim de semana'
            break
        case 3: case 4: case 5: case 6: case 7:
            return 'Dia útil'
            break
        default:
            return 'Dia inválido'
            break        
    }
}

console.log(calcular(8))