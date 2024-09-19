
function getImc(){
//entrada das variaveis e calculamento
let peso = Number(document.getElementById("peso").value)
let altura = Number(document.getElementById("altura").value)
let imc = peso / (altura*altura)

document.getElementById("saida").innerText = imc
}

//acessa a função
document.getElementById("calcular").onclick=getImco

//processamento

//saida
