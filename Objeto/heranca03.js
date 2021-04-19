const notaFinal = {
    aluno: 'Pedro',
    prova1: 10,
    prova2: 8,
    prova3: 7,
    prova4: 6,
    ptPos: 0,
    ptNeg: 0,
    calcularMedia(){
        return `A média de ${this.aluno} é ${((this.prova1 + this.prova2 + this.prova3 + this.prova4) / 4) + (this.ptPos - this.ptNeg)}`
    }
}

const aluno1 = {
    aluno: 'Paulo',
    prova1: 7,
    prova2: 7,
    prova3: 6,
    prova4: 4,
    ptPos: 1,
    ptNeg: 0,
}

const aluno2 = {
    aluno: 'Bia',
    prova3: 0
}

const aluno3 = {
    calcularMedia(){
        return `${this.aluno} é tão esforçado que a ${super.calcularMedia()}`
    }
}

Object.setPrototypeOf(aluno1, notaFinal)
Object.setPrototypeOf(aluno2, notaFinal)
Object.setPrototypeOf(aluno3, notaFinal)

console.log(aluno1.calcularMedia())
console.log(aluno2.calcularMedia())
console.log(aluno3.calcularMedia())