//Crie uma função que receba um valor e transforme em real (R$)

let transformar = (vlr) => vlr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

console.log(transformar(0.3000000000000004))