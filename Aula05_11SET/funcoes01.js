
console.log("Carreguei funcoes01.js")

let nomes = [ "Ana", "Beatriz", "Paulo", "Pedro" ]

function fazAlgo() {
    console.log("Estou executanto a função fazAlgo")  
}

function bomdia(nome, idade) {
    console.log("Bom dia "+nome+"! Tudo bem com vc?");
    console.log("Você tem "+idade+" anos");
}

function sorteiaNumero(limite) {
    return parseInt(Math.random()*1000) % limite
}

function numeroAleatorio(min, max) {
  const x = Math.ceil(min);
  const y = Math.floor(max);
  return Math.floor(Math.random() * (y - x + 1)) + x;
}


function getNome() {
    console.log("Executando a função getNome()")
    let idx = sorteiaNumero(4)
    return nomes[idx]
}

//bomdia("Ana",18)
//bomdia("Bia",20)

let nome = getNome()
console.log("Qual o nome? "+nome);

let num = numeroAleatorio(8,12)
console.log(num);
