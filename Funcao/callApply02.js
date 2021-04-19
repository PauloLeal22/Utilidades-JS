//Função que calcula a média e adiciona (pontosPositivos - pontosNegativos)
function media(ptsNeg = 0, ptsPos = 0){
    return ((this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4) + (ptsPos - ptsNeg)
}

const aluno1 = {
    nota1: 10,
    nota2: 8,
    nota3: 4,
    nota4: 6
} //Média será 7

//Chamada sem parâmetros
console.log(media.call(aluno1))
console.log(media.apply(aluno1))

//função.call(objeto, param1, param2...)
console.log(media.call(aluno1, 1, 2))

//função.apply(objeto, [param1, param2...])
console.log(media.apply(aluno1, [1, 3]))