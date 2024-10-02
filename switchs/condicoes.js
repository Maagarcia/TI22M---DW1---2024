function letraa(n){
    if (n==1){
        console.log("eu adoro beterraba")

    }
    if (n==2){
        console.log("Eu adoro arroz doce")

    }
    if(n==3){
        console.log("Eu adoro maça")

    }

    if(n==4){
        console.log("Eu adoro voce")
    }

    console.log("muito mesmo")
}

// letraa(4)


function letrab(n){
    if (n>10){
        return true
    }else{
        if(n>5){
            return false
        } else {
            if(n==4){
                console.log("funcionando")
        } else {
            console.log("tudo certo")
        }
        }
    }

}

// console.log(letrab(11))


function letrac(n){ 
    if (n==1){
        console.log("python é melhor")
    }
    if (n==2){
        console.log("python é pior")
    }
    if (n==3){
        console.log("java é melhor")
    }
    if (n==4){
        console.log("java é pior")
    }
    if (n==5){
        console.log("condicao 5")
    }
    if (n==6){
        console.log("condicao 6")
    }
    if (n==7){
        console.log("condicao 7")
    }
    if (n==8){
        console.log("condicao 8")

    }
}
// letrac(1)
//  letrac(2)
//  letrac(3)
//  letrac(5)
//  letrac(6)
//  letrac(8)


function letrad(n){
    switch(n){
        case 1:
            console.log("condição 1")
            break;
        
        case 2:
            console.log("condição2")
            break;
            
        
        case 3:
            console.log("condicao3")
            break;
            
        
        case 4:
            console.log("condição4")
            break;
            

        case 5:
            console.log("condição5")
            break;

        
        case 6:
            console.log("condição6")
            break;

    }
}

letrad(4)