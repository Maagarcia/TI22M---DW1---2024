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
    
}

// teste("Talvez há coisas que são melhores ocultas...")


function criptografiacesar(texto,chave){
    let alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?áãÃéíóõúÉÍÓÚÕÁ,. '
    let tamanhoalfabeto = alfabeto.length
    let tamanho = texto.length
    let palavra = ''
    for (i = 0; i<tamanho; i++){
        for(k = 0; k  < tamanhoalfabeto ; k++){
            if (texto[i] == alfabeto[k]){
                if (alfabeto[k+chave] == undefined){
                    palavra += alfabeto[0+(chave)]
                }else{
                    palavra += alfabeto[k+chave]
                }
        }
    }

} 
console.log(palavra)
}



// criptografiacesar("Talvez há coisas que são melhores ocultas...",20)
// criptografiacesar("ÚuFPyTuBuuwICMuMuKOyuMuIuGyFBILyMuIwOFNuMuuu",-20)

function criptografiacesarchat(texto, chave) {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?áãÃéíóõúÉÍÓÚÕÁ,.';
    let tamanhoalfabeto = alfabeto.length;
    let palavra = '';

    for (let i = 0; i < texto.length; i++) {
        let indiceOriginal = alfabeto.indexOf(texto[i]);
        console.log(indiceOriginal)

        if (indiceOriginal !== -1) {  // Verifica se o caractere existe no alfabeto
            let novoIndice = (indiceOriginal + chave + tamanhoalfabeto) % tamanhoalfabeto;
            palavra += alfabeto[novoIndice];
        } else {
            palavra += texto[i];  // Se o caractere não está no alfabeto, mantê-lo inalterado
        }
    }

    return palavra;
}



// console.log(criptografiacesarchat("Hello_World!",1))
// console.log(criptografiacesarchat("Hello World",-1))

//ABCDEFGHIJKLMNOPQRSTUVWXYZ!?áãÃéíóõúÉÍÓÚÕÁ,.'

function criptografiaDefinitiva(texto,chave){
    let palavra = ''
    let alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?áãÃéíóõúÉÍÓÚÕÁ,.'
    let texto2 = texto.toLowerCase()
    for(i=0; i < texto2.length;i++){
        let indice = alfabeto.indexOf(texto2[i])
        // console.log(indice)

        if(indice !== -1){
            let novoindice = (indice + chave + alfabeto.length) % alfabeto.length
            palavra += alfabeto[novoindice]
        } else{
            palavra += texto2[i]
        }
    }   
    // console.log(alfabeto.length)
    return palavra

}
// console.log(criptografiaDefinitiva("Foi preciso, encontrar na casa de carnes",1))
// console.log(criptografiaDefinitiva(`I decided to anything that lives inside of you
// I would never ever lie to you, yeah
// You ain't never gotta lie to me
// I'm everything that I strive to be
// So do I look like him?`,8))
console.log(criptografiaDefinitiva(`She eyes me like a pisces when I am weak
I've been locked inside your heart-shaped box for weeks
I've been drawn into your magnet tar pit trap
I wish I could eat your cancer when you turn black`,5))
// console.log(criptografiaDefinitiva("Foi preciso, encontrar na casa de carnes",-2))





function minusculo(texto){
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    let tamanhoalfabeto = alfabeto.length
    let count = ''
    let textu = texto.toLowerCase()
    for(i = 0; i< textu.length; i++){
        let indice = alfabeto.indexOf(textu[i])
        if(indice !== -1){
            count += alfabeto[indice]
        }else{
            count+=textu[i]
        }
    }
    return count

}
// console.log(minusculo( "MEU PAU TA DURO.."))