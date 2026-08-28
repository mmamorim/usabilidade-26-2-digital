
console.log("carreguei exercicio02.js");

function calcular() {
    console.log("passei aqui");
    
    let altura = parseFloat(document.getElementById("cxaAltura").value)
    let peso = parseFloat(document.getElementById("cxaPeso").value)

    console.log(altura,peso);
    let IMC = peso / (altura * altura);
    console.log(IMC);
    
    let elemResp = document.getElementById("resp")
    elemResp.innerText = IMC

}