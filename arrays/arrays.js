function sumarray(lista){
    let soma = 0
    for(const elemento of lista){
        soma += elemento
        console.log(elemento)
        
    }
    console.log(soma)
}

// sumarray([1,2,3,4, -19])

function maior(lista){
    let maior = 0
    for(numero of lista){
        if(numero > maior){

            maior =  numero
        }
        else{}

    }
    console.log(maior)
}

//  maior([1,2,3,10,-100, 20000,1])


function contar(lista,x){
    let count = 0
    for(elemento of lista){
        if(elemento ==x){
            count++
        }

    }
    console.log(`o numero ${x} aparece ${count} vezes`)

}
// contar([1,2,3,4,5,5,5], 5)


function inverter(lista){
    let tamanho = lista.length
    let lista2 = []
    for(i = tamanho-1; i >=0; i--){
        lista2.push(lista[i])
    }
    console.log(lista2)
}

// inverter(["comer","viver","amar"])
// inverter([1,2,3])

function inverter2(lista){
    let lista2 = []
    for(elemento of lista){
        lista2.unshift(elemento)
    }
    console.log(lista2)
}
// inverter2(["comer","viver","amar"])
// inverter2([1,2,3,4])



function pares(lista){
    let tamanho = lista.length

    for(i = 0; i < tamanho; i++){
        // console.log(lista[i])
        if(lista[i] %2 == 0){
            console.log(lista[i])
        }

    }

}

// pares([1,2,3,4,5,6,7,8,9,10])

function indiceelemento(lista,elemento){
    tamanho = lista.length
    let contador = 0
    for(i=0;i < tamanho; i++){
        if(lista[i] == elemento){
            contador++
            console.log(i)
        }
        }
        if( contador == 0){
            console.log(-1)
    }
}

 
// indiceelemento(["apple","onion", "banana"], "apple")
// indiceelemento([1,2,3,4,5,6,7,8,9],10)
//  indiceelemento([1,2,3,4,5,6,7,8,9],4)

function juntar(lista1,lista2){
    tamanho = lista2.length
    for (elemento of lista2){
        lista1.push(elemento)
    }
    // console.log(lista1)
    return lista1
}

// console.log(juntar(["banana","maça","cereja"],["melão","legal",1]))

function comparar(lista){
    for (elemento of lista){
        if(elemento !== lista[0]){
            return false;
        }else{}
    }
    return true;

}
// console.log(comparar([1,1,1,1]))
// console.log(comparar([1,2,2,2]))


function media(lista){
    let médio = 0
    tamanho = lista.length
    meio = tamanho/2
    if (tamanho%2 == 0 ){
        médio = (lista[meio]+lista[meio-1])/2
        return médio
    }else{ 
        médio = lista[meio-0.5]
        return médio
        
    }
}



// console.log(media([1,2,3,4,5]))
// console.log(media([10,20,30,40]))


function removeduplicata(lista){
    let array = [...new Set(lista)];
    return array

}

// console.log(removeduplicata([1,2,3,3,4,4,5]))
