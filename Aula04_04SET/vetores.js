
console.log("Teste de Vetores (Arrays)");

let nomes = [ "Bia", "Ana Silva", "João", "Pedro" ]

console.log(nomes);

let i = 0

while(i < 4) {
    console.log("Nome "+(i+1)+": "+nomes[i]);
    i++
}

for(let i=0; i < 4; i++) {
    console.log("Nome "+(i+1)+": "+nomes[i]);
}

for(let i in nomes) {
    console.log("Nome "+i+": "+nomes[i]);
}

for(let nome of nomes) {
    console.log("Nome "+nome);
}

let frutas = ["Maçã", "Banana", "Uva"]
for(let fruta of frutas) {
    console.log("Fruta: ",fruta);
}