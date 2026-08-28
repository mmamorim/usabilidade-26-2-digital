
console.log("carreguei exercicio01.js");

function calcular() {
    console.log("passei aqui");
    
    let elemA1 = document.getElementById("notaA1")
    let elemA2 = document.getElementById("notaA2")
    let elemA3 = document.getElementById("notaA3")

    let notaA1 = parseInt(elemA1.value)
    let notaA2 = parseInt(elemA2.value)
    let notaA3 = parseInt(elemA3.value)

    console.log(notaA1,notaA2,notaA3);
    let media =  (notaA1 * 30 + notaA2 * 30 + notaA3 * 40) / 100;
    console.log(media);
    
    let elemResp = document.getElementById("resp")
    elemResp.innerText = media

    if(media < 3) {
        console.log("REPROVADO!");
    } else {
        if(media < 7) {
            console.log("AI!");
        } else {
            console.log("APROVADO!");
        }
    }

}