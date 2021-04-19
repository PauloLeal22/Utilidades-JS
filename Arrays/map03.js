const alunos = [
    {nome: 'Paulo', serie: '3º ano', nota: [7.9, 8.5, 9.0, 5.5]},
    {nome: 'Pedro', serie: '1º ano', nota: [9.0, 4.7, 6.2, 3.1]},
    {nome: 'Bianca', serie: '2º ano', nota: [10, 4.7, 8.6, 9.8]},
    {nome: 'Maria', serie: '9º ano', nota: [6.6, 5.7, 4.3, 3.7]}
]

let calcular = array => {
    let media = 0
    for(let i in array){
        media += array[i]
    }
    return media / 4
}

const getNotaAluno = array => `${array.nome}: ${calcular(array.nota).toFixed(2)}`

let result = alunos.map(getNotaAluno)

console.log(result)