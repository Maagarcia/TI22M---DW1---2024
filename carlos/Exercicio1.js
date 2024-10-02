function contaN(n){
    for (let i=0; i<= n; i++){
        console.log(i)
    }

}


function contaNinverso(n){
    for (let i=n; i >= 0; i--){
        console.log(i)
    }
}

// contaNinverso(7)

function contaNpares(n){
    for(let i = 0; i<=n ; i+=2){
        console.log(i)
    }
}

// contaNpares(5)

function primos(n){
    verifica = 0
    for(z = 0; z<=n; z++)
        if(n%z == 0){
            verifica +=1
        }
        else{}

    if (verifica == 2){
        return false
    }else{
        return true
    }

}

// console.log(primos(10))
// console.log(primos(16))

function primosateN(n){


    for(i = 0; i <= n; i++)
        numprimo = primos(i)
        if (numprimo){
            console.log(z)
        }
}

// primosateN(10)


function fatorial(n){
    maluco = ''
    for(i = n; i > 1; i--)
        maluco = i * (i-1)


        console.log(maluco)
}

fatorial(10)