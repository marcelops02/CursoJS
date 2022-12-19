function parimpar(n) {
  if (n % 2 == 0) {
    return "Par!";
  } else {
    return "Impar!";
  }
}

/*
CRIANDO UMA FUNÇÃO DE CHAMADA PARA RECEBER O ELEMENTO
let res = parimpar(4)
console.log(res);
*/

//CHAMANDO DIRETAMENTE O RESULTADO
console.log(parimpar(22));
