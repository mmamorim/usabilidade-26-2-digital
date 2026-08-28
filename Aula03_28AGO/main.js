
console.log("oi gente")

function calcular() {
    console.log("Cliquei no botão calcular ");
    let elemNota1 = document.getElementById("nota1")
    let elemNota2 = document.getElementById("nota2")
    let nota1 = parseFloat(elemNota1.value)
    let nota2 = parseFloat(elemNota2.value)
    let media = (nota1+nota2)/2
    console.log("Sua média é "+media)
    
    //if(media < 7) {
    //    console.log("VC ESTÀ REPROVADO!");
    //    console.log("A coisa ficou feia!");
    //} else {
    //    console.log("VC ESTÀ APROVADO!");
    //}
    
    //if(media < 3) {
    //    console.log("VC ESTÀ REPROVADO!");
    //}
    //if(media >= 3 && media < 7) {
    //    console.log("VC PODE AI!");
    //}
    //if(media >= 7) {
    //    console.log("VC ESTÀ APROVADO!");
    //}

    if(media < 3) {
        console.log("VC ESTÀ REPROVADO!");
    } else {
        if(media < 7) {
            console.log("VC ESTÀ AI!");
        } else {
            console.log("VC ESTÀ APROVADO!");
        }
    }
    
}

let contador = 1
function passeiEmCima() {
    console.log("passei em cima " + contador + " vezes");
    contador++
}