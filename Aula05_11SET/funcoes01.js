import { sorteiaNumero } from "./sorteios.js"
import { numeroAleatorio } from "./sorteios.js"
import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"

console.log("Carreguei funcoes01.js")

//console.log(nomes);
//console.log(nomes.length);
console.log(sobrenomes);
console.log(sobrenomes.length);

function fazAlgo() {
    console.log("Estou executanto a função fazAlgo")  
}

function bomdia(nome, idade) {
    console.log("Bom dia "+nome+"! Tudo bem com vc?");
    console.log("Você tem "+idade+" anos");
}

function getNome() {
    //console.log("Executando a função getNome()")
    let idx = sorteiaNumero(nomes.length)
    return nomes[idx]
}

function getSobrenome() {
    //console.log("Executando a função getNome()")
    let idx = sorteiaNumero(sobrenomes.length)
    return sobrenomes[idx]
}

//bomdia("Ana",18)
//bomdia("Bia",20)

let nome = getNome()
console.log("Qual o nome? "+nome);
let sobrenome = getSobrenome()
console.log("Qual o sobrenome? "+sobrenome);

console.log(nome+" "+sobrenome);

//let num = numeroAleatorio(8,12)
//console.log(num);
