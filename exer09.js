function calcularNotaAluno(nota) {
  
    if (nota < 38) {
        console.log(`Nota ${nota}: Reprovado.`);
        return nota; 
    }
    let resto = nota % 5; 

   
    if (resto !== 0) {

        let distanciaParaProximoMultiplo = 5 - resto;

        if (distanciaParaProximoMultiplo < 3) {
            nota = nota + distanciaParaProximoMultiplo;
        }
    }

  
    console.log(`Nota Final: ${nota} - Aprovado!`);
    return nota;
}


calcularNotaAluno(29); 
calcularNotaAluno(38);
calcularNotaAluno(84); 
calcularNotaAluno(82); 