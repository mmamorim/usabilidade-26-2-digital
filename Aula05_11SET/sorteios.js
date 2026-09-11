
export function sorteiaNumero(limite) {
    //console.log("chamando sorteiaNumero");
    return parseInt(Math.random() * 1000) % limite
}

export function numeroAleatorio(min, max) {
    //console.log("chamando numeroAleatorio");
    const x = Math.ceil(min);
    const y = Math.floor(max);
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

//export { sorteiaNumero, numeroAleatorio }