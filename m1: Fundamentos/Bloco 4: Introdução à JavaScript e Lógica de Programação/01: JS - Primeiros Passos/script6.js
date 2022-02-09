let chessPice = "";
let result = chessPiece.toLocaleLowerCase();

switch (result) {
    case  "peão":
        console.log("Primeiro movimento: duas casas a frente; Segundo movimento em diante: uma casa a frente");
        break;
    
    case "torre":
        console.log("Em lLinha reta na hrizontal ou na vertical");
        break;
    
    case "cavalo":
        console.log("Em L, na horizontal ou na vertical, 2 casas de altura e 1 de largura");
        break;

    case "bispo":
        console.log("Em linha reta, na diagonal");
        break;

    case "rainha":
        console.log("Em Linha reta, em qualquer direção");
        break;
        
    case "rei":
        console.log("Uma casa, em qualquer direção")
        break;

    default:
        console.log("Erro. Peça invalida")
}
