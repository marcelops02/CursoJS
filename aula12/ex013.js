var agora = new Date();
var diaSem = agora.getDay();

/*
Dias da semana são impressos em números e não strings
0 - domingo
1 - segunda 
2 - terça 
3 - quarta
4 - quinta
5 - sexta
6 - sábado
*/

console.log(diaSem);

switch (
  diaSem //Só funciona com números inteiros e com caracteres(''), não recomendado para ações com intervalo, serve muito mais para testes exatos
) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;

  default:
    console.log("[ERRO] Dia Inválido");
    break;
}
