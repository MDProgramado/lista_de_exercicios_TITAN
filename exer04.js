let dividendoRecebido = prompt("Digite a base:")
let dividendo = parseFloat(dividendoRecebido)
let divisorRecebido = prompt("Digite o expoente:")
let divisor = parseFloat(divisorRecebido)


function calcularDivisao(dividendo, divisor) {
    let resultadoDivisão = dividendo / divisor;
    let resultadoResto = dividendo % divisor;
    return "O resultado da divisão de " 
    + dividendo + " por " + divisor + " é " + resultadoDivisão +
    "\n e o resto da divisão é " + resultadoResto

}

console.log(calcularDivisao(dividendo, divisor))