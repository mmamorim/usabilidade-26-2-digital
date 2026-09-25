import { sorteiaNumero } from "./fakeUsers/sorteios.js"
import { getFakeUser } from "./fakeUsers/fakeUser.js" 

//console.log("main.js carregado...")

let num = sorteiaNumero(7)
//console.log(num);

let user1 = getFakeUser()
let user2 = getFakeUser()
//console.log(user1);
//onsole.log(user2);

function bomdia(u1, u2) {
    console.log("Bom dia "+u2.nome+"! Tudo bem com vc?");
    console.log("Sim...e com vc "+u1.nome+"? Tudo bem tb?");
}

//bomdia(user1, user2)

function imprimeUser(user) {
    console.log("User: ",user);    
    return user
}

let func1 = imprimeUser

//imprimeUser(user1)
//func1(user2)

let fazAlgo = function (valor) {
    console.log("executando a função faz algo...",valor);
} 

let soma = function (x,y) {
    return x+y
}

//console.log("O que tem em fazAlgo? ",fazAlgo);
fazAlgo(5)
let z = soma(5,7)
//console.log(z);

function oi(user) {
    console.log("Oi "+user.nome+" tudo bem?");
}

function tchau(user) {
    console.log("Tchau "+user.nome+" até logo!");
}

function fazPergunta() {
    console.log(user1.nome+" como anda a família?");
}

function encontro(f1, f2) {
    f1(user1)
    f2(user2)
}

console.log("user1",user1);
console.log("user2",user2);

//encontro(oi,tchau)
//encontro(oi,fazPergunta)

encontro(oi, function () {
    console.log(user2.nome+"... seu bobo!");
})

setInterval(function() {
    let user = getFakeUser()
    oi(user)
}, 1000)