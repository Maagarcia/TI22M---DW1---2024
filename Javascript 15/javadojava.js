// saidas
document.write ("ola mundo")
document.write ("<br>")
document.write ("ola mundo")
document.write ("<br>")
document.write ("ola mundo")
document.write ("<br>")
console.log("corno") //escreve no console
// alert("VOCE ESTÁ SENDO HACKEADO") //pop-up

// variaveis

const x3 = 10
let x2 // variavel local
var x1 // variavel global


x1 = 100
x2 = "oi"

//nesse exemplo o var existe dentro do if, porem ele é replicado duas vezes por ser uma variavel global 
if (true){
    var teste = 100
    console.log(teste)
}
console.log(teste)

//aqui o let só existen debtro da condição, por isso só aparece uma vez
if (true){
    let teste = 250
    console.log(teste)
}
console.log(teste)

//pega o prompt e poe no log
let nome = prompt("digite seu nome")
console.log(nome)
document.write("seja bem vindo " , nome , " bonitão")




