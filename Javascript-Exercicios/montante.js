function montante2(){
    let montante = Number(document.getElementById("montante").value)
    let capital = Number(document.getElementById("capital").value)
    let tempo = Number(document.getElementById("tempo").value)

    let juros = capital * (montante+1)^tempo

    document.getElementById("saida").innerText = juros
    
}

document.getElementById("calcular").onclick = montante2