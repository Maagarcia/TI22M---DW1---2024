function troco(){
    let preco = (document.getElementById("preco").value)
    let pago = (document.getElementById("pago").value)

    let resto = pago - preco


if (resto < 0){
    resto = "voce ta devendo ainda seu caloteiro"
}

    document.getElementById("saida").innerText = resto

    let vintao = Math.floor( resto/20)

    if(vintao < 0){
        vintao = "seu valor é invalido"
    }

    
    document.getElementById("vinte").innerText = vintao

    let resto1 = resto%20

    let dez = Math.floor(resto1/10)

    if(dez < 0){
        dez = "seu valor é invalido"
    }

    document.getElementById("dez").innerText = dez

    let resto2 = resto1%10

    let um = Math.floor(resto2/1)

    if(um < 0){
        um = "seu valor é invalido"
    }

    document.getElementById("um").innerText = um
    
}
document.getElementById("calcular").onclick = troco