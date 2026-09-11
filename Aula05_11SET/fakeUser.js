import { sorteiaNumero } from "./sorteios.js"
import { numeroAleatorio } from "./sorteios.js"
import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"
import emails from "./emails.js"
import getRG from "./rg.js"

//console.log(nomes);
//console.log(nomes.length);
//console.log(sobrenomes);
//console.log(sobrenomes.length);
//console.log(emails);
//console.log(emails.length);

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

function getEmail(nome, sobrenome) {
    let username = nome.toLowerCase() + "." + sobrenome.toLowerCase()
    let idx = sorteiaNumero(emails.length)
    let email = username + "@" + emails[idx]
    email = email.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return email
}

export function getFakeUser() {
    let nome = getNome()
    //console.log("Qual o nome? "+nome);
    let sobrenome = getSobrenome()
    //console.log("Qual o sobrenome? "+sobrenome);
    //console.log(nome + " " + sobrenome);
    let email = getEmail(nome, sobrenome)
    //console.log("Qual o email? " + email);
    let rg = getRG()

    return {
        nome,
        sobrenome,
        email,
        rg
    }
}