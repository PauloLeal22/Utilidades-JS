function pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) //O this não varia com arrow function
    }, 1000)
}

new pessoa