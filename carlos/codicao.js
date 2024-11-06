function Tabuadainwhile(n){
    resul = n
    contador = 1

    while (contador <=10){
        resul = n*contador
        console.log(`${n} x ${contador} = ${resul}`)
        contador ++
    }

    console.log("--------------------")

}


// Tabuadainwhile(2)

function Tabuadainfor(n){
    resul = n
    contador = 1
    
    
    //declara contador, delimita seu limite, impõe o quanto ele passa por cada laço de repetição
    for (contador = 0; contador <=10; contador++){
        console.log(`${n} x ${contador} = ${contador*resul}`)
    }
    console.log("--------------------")
}



// Tabuadainfor(55)

function square(x) {
    return x * x;
  }

console.log(countVowels("OpenAI")); // Deve exibir: 3
console.log(countVowels("JavaScript")); // Deve exibir: 3
