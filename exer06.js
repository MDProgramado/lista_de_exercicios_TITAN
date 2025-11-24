let capitalRecebido = prompt("Digite um valor de capital");
let capital = parseFloat(capitalRecebido);


let taxaJurosRecebdia = prompt("Digite um valor de taxa de juros (ex: 5 para 5%)");
let taxaDeJuros = parseFloat(taxaJurosRecebdia) / 100; 


let tempoDeAplicacaoRecebida = prompt("Digite o tempo em meses dessa aplicação");
let tempoDeAplicacao = parseInt(tempoDeAplicacaoRecebida); 

function calcularJurosSimples(capital, taxaDeJuros, tempoDeAplicacao){

    let jurosSimples = capital * taxaDeJuros * tempoDeAplicacao;
    return "O valor dos juros simples é de: R$ " + jurosSimples.toFixed(2);
}

function calcularJurosCompostos(capital, taxaDeJuros, tempoDeAplicacao){

    let montante = capital * ( 1 + taxaDeJuros) ** tempoDeAplicacao;
    let jurosCompostos = montante - capital;
    return "O valor dos juros compostos é de: R$ " + jurosCompostos.toFixed(2);


}

console.log(calcularJurosSimples(capital, taxaDeJuros, tempoDeAplicacao));
console.log(calcularJurosCompostos(capital, taxaDeJuros, tempoDeAplicacao));
