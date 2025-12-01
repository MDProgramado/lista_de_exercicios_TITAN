function comprarVeiculo(modelo) {

    switch (modelo.toLowerCase()) {
        case 'hatch':
            console.log("Compra efetuada com sucesso");
            break;


        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log("Tem certeza que não prefere este modelo?");
            break;

        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
            break;
    }
}


console.log("Cliente pede Hatch:");
comprarVeiculo("hatch");

console.log("\nCliente pede Motocicleta:");
comprarVeiculo("motocicleta");

console.log("\nCliente pede Jato:");
comprarVeiculo("jato");