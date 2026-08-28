
console.log("carreguei exercicio02.js");

function calcular() {
    console.log("passei aqui");

    let altura = parseFloat(document.getElementById("cxaAltura").value)
    let peso = parseFloat(document.getElementById("cxaPeso").value)

    console.log(altura, peso);
    let IMC = peso / (altura * altura);
    console.log(IMC);

    let elemResp = document.getElementById("resp")
    elemResp.innerText = IMC

    // if (IMC < 18.5) {
    //     document.getElementById("msg").innerText = "ABAIXO PESO NORMAL"
    // } else {
    //     if (IMC < 24.9) {
    //         document.getElementById("msg").innerText = "PESO NORMAL"
    //     } else {
    //         if (IMC < 29.9) {
    //             document.getElementById("msg").innerText = "EXCESSO DE PESO"
    //         } else {
    //             if (IMC < 34.9) {
    //                 document.getElementById("msg").innerText = "OBESIDADE 1"
    //             } else {
    //                 if (IMC < 39.9) {
    //                     document.getElementById("msg").innerText = "OBESIDADE 2"
    //                 } else {
    //                     document.getElementById("msg").innerText = "OBESIDADE 3"
    //                 }
    //             }
    //         }
    //     }
    // }

    if (IMC < 18.5) {
       document.getElementById("msg").innerText = "ABAIXO PESO NORMAL"
    }
    if (IMC >= 18.5 && IMC < 24.9) {
       document.getElementById("msg").innerText = "PESO NORMAL"
    }
    if (IMC >= 24.9 && IMC < 29.9) {
       document.getElementById("msg").innerText = "EXCESSO DE PESO"
    }
    if (IMC >= 29.9 && IMC < 34.9) {
       document.getElementById("msg").innerText = "OBESIDADE 1"
    }
    if (IMC >= 34.9 && IMC < 39.9) {
       document.getElementById("msg").innerText = "OBESIDADE 2"
    }
    if (IMC >= 39.9) {
       document.getElementById("msg").innerText = "OBESIDADE 3"
    }
    
    
}