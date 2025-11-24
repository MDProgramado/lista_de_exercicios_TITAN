let aRecebido = prompt("Digite o valor de A:")
let a = parseFloat(aRecebido)
let bRecebido = prompt("Digite o valor de B:")
let b = parseFloat(bRecebido)
let cRecebido = prompt("Digite o valor de C:")
let c = parseFloat(cRecebido)


function calcularEquacaoSegundoGrau(a, b, c) {
    const delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        return "A equação não possui raízes reais.";
    } else if (delta === 0) {
        const raiz = -b / (2 * a);
        return `A equação possui uma raiz real: x = ${raiz}`;
    } else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `A equação possui duas raízes reais: x1 = ${raiz1} e x2 = ${raiz2}`;
    }

}

console.log(calcularEquacaoSegundoGrau(a, b, c))