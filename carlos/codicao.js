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



function Tabuadainfor(n){
    resul = n
    contador = 1
    
    
    //declara contador, delimita seu limite, impõe o quanto ele passa por cada laço de repetição
    for (contador = 0; contador <=10; contador++){
        console.log(`${n} x ${contador} = ${contador*resul}`)
    }
}



Tabuadainfor(2)
Tabuadainfor(4)
