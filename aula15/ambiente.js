let num = [5, 8, 2, 9, 3];

num.sort(); //Coloca os elementos em ordem crescente
num[5] = 6; //Criou um novo elemento escolhenddo a posição
num.push(7); //Cria um elemento no final da array
num.length; //Comprimento do vetor

console.log(num); //função
console.log(`Nosso vetor tem ${num.length} posições`); //Quantidade de elemntos dentro da função
console.log(`O primeiro valor do vetor é ${num[0]}`); //Exibe o primeiro elemnto dentro da função
let pos = num.indexOf(8); //Procura o valor dentro da array, e imprime a sua posição
if (pos == -1) {
  console.log(`O valor não foi encontrado`);
} else {
  console.log(`O valor 8 esta na posição ${pos}`);
}
