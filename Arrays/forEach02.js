function forEach2(array, inc = 0){
    for(let i in array){
        console.log(`${inc += 1}) ${array[i]}`)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

forEach2(aprovados)