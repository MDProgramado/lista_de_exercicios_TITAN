function calculadora(numero1, numero2){

    const operacion = prompt("Digite a operação que deseja realizar (+, -, *, /): ");

    let resultado;

    switch(operacion) {
        case "+":
            resultado = numero1 + numero2;
            alert(`O resultado da adição é: ${resultado}`);
            break;
        case "-":
            resultado = numero1 - numero2;
            alert(`O resultado da subtração é: ${resultado}`);
            break;
        case "*":
            resultado = numero1 * numero2;
            alert(`O resultado da multiplicação é: ${resultado}`);
            break;
        case "/":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
                alert(`O resultado da divisão é: ${resultado}`);
            } else {
                alert("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            alert("Operação inválida. Por favor, escolha entre +, -, * ou /.");
    }

}


calculadora(10, 5);
