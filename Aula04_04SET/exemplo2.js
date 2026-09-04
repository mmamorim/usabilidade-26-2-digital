
console.log("Aula 4 exemplo 2");

let frutas = []

function adicionar() {
    console.log("Chamei o adicionar");

    let nome = document.getElementById("txtNome").value
    let cor = document.getElementById("txtCor").value
    let emoji = document.getElementById("txtEmoji").value

    let fruta = { nome, cor, emoji }
    console.log(fruta);
    frutas.push(fruta)
    console.log(frutas);

    let elem = document.getElementById("cxaLista")
    let bloco = "<ol>"
    for(let fruta of frutas) {
        bloco = bloco + "<li>"
        bloco = bloco + fruta.emoji + " " + fruta.nome + " " + fruta.cor
        bloco = bloco + "</li>"
    }
    bloco = bloco + "</ol>"
    console.log(bloco);    
    elem.innerHTML = bloco

}

function remover() {
    console.log("Clicou no botão remover");
    frutas.pop()

    let elem = document.getElementById("cxaLista")
    let bloco = "<ol>"
    for(let fruta of frutas) {
        bloco = bloco + "<li>"
        bloco = bloco + fruta.emoji + " " + fruta.nome + " " + fruta.cor
        bloco = bloco + "</li>"
    }
    bloco = bloco + "</ol>"
    console.log(bloco);    
    elem.innerHTML = bloco
}