function verificaAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
}

console.log(verificaAnoBissexto(1200))
console.log(verificaAnoBissexto(1204))
console.log(verificaAnoBissexto(1208))
