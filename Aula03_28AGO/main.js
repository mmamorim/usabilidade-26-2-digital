
console.log("oi gente")

function calcular() {
    console.log("Cliquei no botão calcular ");
    let elemNota1 = document.getElementById("nota1")
    let elemNota2 = document.getElementById("nota2")
    let nota1 = parseFloat(elemNota1.value)
    let nota2 = parseFloat(elemNota2.value)
    let media = (nota1+nota2)/2
    console.log("Sua média é "+media)
    
}

let contador = 1
function passeiEmCima() {
    console.log("passei em cima " + contador + " vezes");
    contador++
}