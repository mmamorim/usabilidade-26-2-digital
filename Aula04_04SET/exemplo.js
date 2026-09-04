
console.log("Aula 4 exemplo");

let frutas = []

function adicionar() {
    console.log("Chamei o adicionar");

    let elemEntrada = document.getElementById("txtEntrada")
    let texto = elemEntrada.value
    //console.log(texto);
    
    frutas.push(texto)
    console.log(frutas)

    let elem = document.getElementById("cxaLista")
    let bloco = "<ol>"
    for(let fruta of frutas) {
        bloco = bloco + "<li>"+fruta+"</li>"
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
        bloco = bloco + "<li>"+fruta+"</li>"
    }
    bloco = bloco + "</ol>"
    console.log(bloco);    
    elem.innerHTML = bloco
}