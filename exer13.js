function verificaDiaUtil(dia){

    switch(dia){
        case 1:
            console.log("Domingo " + dia + " não é dia util ")
            break;
        case 2:
            console.log("Segunda " + dia + " é dia util")
            break;
                    case 3:
            console.log("Terça " + dia + " é dia util")
            break;
                    case 4:
            console.log("Quarta " + dia + " é dia util")
            break;
                    case 5:
            console.log("Quinta" + dia + " é dia util")
            break;
                  case 6:
            console.log("Sexta" + dia + " é dia util")
            break;

        case 7:
            console.log("Sabado" + dia + " não é dia util ")
            break;

        default: 
         console.log("Dia invalidom digite um dia valido ")
    }
}


console.log(verificaDiaUtil(1))