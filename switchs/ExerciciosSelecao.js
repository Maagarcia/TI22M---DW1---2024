function exercicio1(n){
    if (n>=5 && n<=7){
        console.log("Infantil A")
    }

    else if (n>=8 && n<=10){
        console.log("Infantil B")
    }

    else if (n>=11 && n<=13){
        console.log("Juvenil A")
    }

    else if (n>=14 && n<=17){
        console.log("Juvenil B")
    }

    else if (n>=18){
        console.log("Adulto")
    }

    else{
        console.log("indisposto")
    }
}

// exercicio1(4)
// exercicio1(5)
// exercicio1(6)
// exercicio1(16)
// exercicio1(36)


function exercicio2(x,y,z){
    if(x+y >= z && z> x-y){
        console.log("Voce tem um triangulo")
    }
    else {
        console.log ("voce nao tem um triangulo")
    }

    
}

// exercicio2(10,20,30)
// exercicio2(10,2,3)

function exercicio3(x,y,z){
    if (x === y && y === z) {
        console.log("Você tem um triângulo equilátero");
    } else if (x === y || y === z || z === x) {
        console.log("Você tem um triângulo isósceles");
    } else {
        console.log("Seu triângulo é escaleno");
    }
}

// exercicio3(5, 5, 5); 
// exercicio3(5, 7, 7);
// exercicio3(3, 4, 5);




// exercicio6(2020)
// exercicio6(2019)


function exercicio5(n,x){
    let resultado;
    
    switch (x){
        case "m":
            resultado = n / 100
            console.log("O Valor dos centimentros em "  +x +" é de " +resultado+x)
            break;
            
            case "mm":
                resultado = n *10  
                console.log("O Valor dos centimentros em "  +x +" é de " +resultado+x)
                break;
                
                case "km":
                    resultado = n/ 100000
                    console.log("O Valor dos centimentros em "  +x +" é de " +resultado+x)
                    break;
                    
                }
            }
            
// exercicio5(1000, "km")
// exercicio5(100, "mm")


function exercicio6(n){
    if(n %400 == 0 || (n%4==0 && n%100 != 0)){
        console.log("O ano " +n+" é bissexto")
    } else{
        console.log("O ano " +n+" Não é bissexto")
    }

}

function exercicio7(n, x) {
    if (n < 0.7 * x) {
        return true; 
    } else {
        return false;
    }
}

console.log(exercicio7(4.50, 7.00))
console.log(exercicio7(5.50, 7.00))



