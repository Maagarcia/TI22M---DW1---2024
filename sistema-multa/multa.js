function multa(){
    let via = Number(document.getElementById("via").value)
    let carro = Number(document.getElementById("carro").value)
    let multa = Math.floor(((carro/via) - 1) * 100)
    let texto = 0





    // classlist.add adiciona a minha div o valor que eu quiser, no caso eu adicionei ao id "saida" a classe "errado" (Que deixa a fonte vermelha) e "correto" (Que deixa a fonte verde) dependendo do conteudo que eu atribuo ao meus inputs

    if(multa <= 20){
        texto = "Voce Ultrapassou "+ multa + "% Do limite de velocidade, a multa é de R$ 130,16"
        document.getElementById("saida").classList.add("errado")
        document.getElementById("saida").classList.remove("correto")
        
        
    } if (20 < multa <= 50){
        texto = "Voce Ultrapassou "+ multa + "% Do limite de velocidade, a multa é de R$ 195,23"
        // document.getElementById("saida").innerText = texto
        document.getElementById("saida").classList.add("errado")
        document.getElementById("saida").classList.remove("correto")
    }
    if (multa > 50){
        texto = "Voce Ultrapassou "+ multa + "% Do limite de velocidade, a multa é de R$ 880,41"
        // document.getElementById("saida").innerText = texto
        document.getElementById("saida").classList.add("errado")
        document.getElementById("saida").classList.remove("correto")
    }
    else{
        texto = "Não há problema "

        document.getElementById("saida").innerText = multa
        document.getElementById("saida").classList.add("correto")
        
    }
    
    document.getElementById("saida").innerText = texto
}

document.getElementById("calculo").onclick = multa