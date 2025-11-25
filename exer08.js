function analisarDesempenho(stringPontuacao){

    const pontuacao = stringPontuacao.split(' ').map(parseFloat);

    if(pontuacao.length === 0 || isNaN(pontuacao[0])){

        return [0, 0]
    }

    let recordeMaior = pontuacao[0];
    let recordeMenor = pontuacao[0];

    let quebraRecordeMaior = 0;
    let piorJogo = 1;

    for(let i = 0; i < pontuacao.length; i++){
        const pontuacaoAtual = pontuacao[i];

        if(pontuacaoAtual > recordeMaior){
            recordeMaior = pontuacaoAtual;
            quebraRecordeMaior++;
        }
        
        else if(pontuacao < recordeMenor){
            recordeMenor = pontuacaoAtual;
            piorJogo = i + i;
        }
    }
    return [quebraRecordeMaior, piorJogo]
}

const pontuacoesExemplo1 = "10 20 15 30 5 40";
const resultado1 = analisarDesempenho(pontuacoesExemplo1);

console.log(`\nPontuações: "${pontuacoesExemplo1}"`);
console.log(`[Quebras de Recorde de Maior, Jogo da Pior Pontuação]: [${resultado1[0]}, ${resultado1[1]}]`);


const pontuacoesExemplo2 = "10 5 8 10 3 1";
const resultado2 = analisarDesempenho(pontuacoesExemplo2);

console.log(`\nPontuações: "${pontuacoesExemplo2}"`);
console.log(`[Quebras de Recorde de Maior, Jogo da Pior Pontuação]: [${resultado2[0]}, ${resultado2[1]}]`);