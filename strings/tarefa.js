function reverso(texto){
    texto = texto.split('')
    texto = texto.reverse('')
    texto = texto.join('')
    return texto   
    
    
}

// console.log(reverso("hello"))


function vogal(texto){
    let tamanho = texto.length
    let count = 0
    for(i = 0; i<=tamanho; i++){
        let banana =(texto[i])
        if(banana == "a" || banana == "e" || banana == "i" || banana == "o" || banana == "u"){
            count++
        }else{}
    }
    console.log(count)
} 

// vogal("alalal")

function palindromo(texto){
    let texto1 = texto
    texto1 = texto1.split('')
    // console.log(texto1)
    texto1 = texto1.reverse('')
    // console.log(texto1)
    texto1 = texto1.join('')
    // console.log(texto1)
    
    if(texto == texto1){
        // return true
        console.log("igual", texto1, texto)
    } else{
        // return false
        console.log("diferente", texto1, texto)
    }
    
}

// palindromo("jogo")
// palindromo("queijo")
// palindromo("luz azul")
//  palindromo("arara")


function contaletra(texto, letra){
    let count = 0
    let tamanho = texto.length

    for (i = 0; i<=tamanho; i++){
        
        if(texto[i] == letra){
            count++
        } else{}
    }
    console.log(count)

}
// contaletra("hoje tem festa", "e")

function iniciais(texto){
    texto = texto.split(' ')
    let inicial = ''
    let tamanho = texto.length
    for(i=0; i < tamanho; i++){

        let palavra = texto[i][0]
        inicial += palavra
    }
    console.log(inicial)
}


//iniciais("Joao da Silva")

function replace(texto, antigo,novo){
    let tamanho = texto.length
    for(i = 0; i <= tamanho; i++){
        if(texto[i] == antigo){
            texto = texto.replace(texto[i],novo)
            // console.log(texto)
        } else{}
        
    }
    console.log(texto)
    
}
// replace("Hello World", "l", "P")


function solidsnake(texto){
    let tamanho = texto.length
        for(i = 0; i< tamanho; i++){
            let letra = texto[i]
            if(letra == " "){
                texto = texto.replace(letra,"_")
                
            } else{}
            if(letra === letra.toUpperCase()){
                texto = texto.replace(letra, letra.toLowerCase())
            }

        }
    console.log(texto)

        

}

//  solidsnake("EU AMo voCe")

function primaiusculo(texto){
    texto = texto.split(" ")
    tamanho = texto.length
    for(i = 0; i < tamanho; i++){
        if(texto[i][0] == texto[i][0].toLowerCase()){
            texto[i] = texto[i][0].toUpperCase() + texto[i].slice(1).toLowerCase()
        
        }
    }
    console.log(texto.join(" "))
}

// primaiusculo("adoro programar")

function espaço(texto){
    texto = texto.trim()
    texto = texto.replace(/\s+/g,' ') 
    console.log(texto)



}

// espaço("     o      jogo     ")

function teste(texto){
    let alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?áãÃéíóõúÉÍÓÚÕÁ,. '
    let tamanho2 = alfabeto.length
    let tamanho = texto.length
    let palavra2 = ""
    for(i = 0; i < tamanho; i++){
        for (j = 0; j < tamanho2; j++)
        if(texto[i] != alfabeto[j]){
            console.log(palavra2 + alfabeto[j])
            
        } else{
            palavra2 += alfabeto[j]
            console.log(palavra2)
            break
            
        }

    }
    console.log("--------------------------------")
}

teste("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?áãÃéíóõúÉÍÓÚÕÁ,. ")