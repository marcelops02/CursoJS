let valores = [8, 1, 7, 4, 2, 9];

valores.sort();

/*
for (let a = 0; a < valores.length; a += 1) {
  console.log(`A posição ${a} tem o valor ${valores[a]}`);
}
*/

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
