//Crie uma função que calcule a formula de bhaskara

function calcularBhaskara(ax, bx, c){
    let delta = Math.pow(bx, 2) - 4 * ax * c
    if(delta < 0){
        return 'Delta é negativo'
    }else{
        let result = (-bx + Math.sqrt(delta)) / 2 * ax
        let result2 = (-bx - Math.sqrt(delta)) / 2 * ax
        return{
            result,
            result2
        }
    }    
}

console.log(calcularBhaskara(5, 7, -15))