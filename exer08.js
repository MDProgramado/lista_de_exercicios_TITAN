function analisarDesempenho(stringPontuacao){

    const pontuacao = stringPontuacao.split(' ').map(parseFloat);

    if(pontuacao.length === 0 || isNaN(pontuacao[0])){

        return [0, 0]
    }
}