var listadePeca = ["Filtro de Ar","Motor","Amortecedor"] //É um vetor

if (listadePeca.length < 10){ //Comando ".lenght" verifica a quantidade de itens dentro da variável

    //É possível cadastrar
    console.log ("É possível cadastrar mais peças") //"console.log" equivale ao "printf" em C
}
else {
    console.log ("Não tem mais espaço na lista")
}

let peso = 50
if (peso < 100){
    console.log ("A peça deve pesar no mínimo 100g")
}
else {
    console.log ("A peça possui peso adequado")
}

let nomePeca = "Disco de Freio"

/*if (nomePeca.length > 3){
    console.log ("O nome da peça está adequado para o cadastro")
}
else if (nomePeca == 0){
    console.log ("O nome da peça não pode ser vazio")
}
else {
    console.log ("O nome deve ter mais que 3 caracteres, digite um nome adequado")
}*/

switch (nomePeca.length){
    case 0: 
    console.log ("O nome da peça não pode ser vazio")
    break;

    case 1:
    case 2:
    case 3:
    console.log ("O nome deve ter mais que 3 caracteres, digite um nome adequado")
    break;

    default:
        console.log ("O nome da peça está adequado para o cadastro")
        break; 
}