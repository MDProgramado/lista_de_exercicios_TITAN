let baseRecebida = prompt("Digite a base:")
let base = parseFloat(baseRecebida)
let expoenteExpoenteRecebido = prompt("Digite o expoente:")
let expoente = parseFloat(expoenteExpoenteRecebido)

function calcularPotencia(base, expoente) {
    let resultadoPotencia = base ** expoente;
    return "O resultado de " + base + " elevado a " + expoente + " é " + resultadoPotencia
}

console.log(calcularPotencia(base, expoente))