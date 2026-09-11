import { getFakeUser } from "./fakeUser.js" 

console.log("Carreguei funcoes01.js")

function fazAlgo() {
    console.log("Estou executanto a função fazAlgo")  
}

function bomdia(u1, u2) {
    console.log("Bom dia "+u2.nome+"! Tudo bem com vc?");
    console.log("Sim...e com vc "+u1.nome+"? Tudo bem tb?");
}

let user1 = getFakeUser()
console.log(user1);

let user2 = getFakeUser()
console.log(user2);

bomdia(user1,user2)

