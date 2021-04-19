/*
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função)
e com ponto de exclamação "!" no final.
*/

const cumprimentar = string => 'Olá '.concat(string, '!')

console.log(cumprimentar('Paulo'))