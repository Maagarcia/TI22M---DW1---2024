function matriz (x){
    // let linhas = matriz.length
    // let colunas = matriz[0].length
    for (i = 0; i< x.length; i++){
        for(j = 0; j< x[0].length;j++){
            console.log(x[i][j]);
        }


    }
}
let h = [
    [1,2],
    [3,4]
]
// matriz(h)
// matriz([[3,4],[5,6]])


function matrizcomof(x){
    for(elemento of x){
        for(elementos2 of elemento){
            if(elementos2 == x[0][0]){
                console.log("bubu")
            }else{

                console.log(elementos2)
            }
        }
    }

}
// matrizcomof([[3,4],[5,6]])

function matrizsoma(x,y){
    let newmatriz = []
    for(i=0; i < x.length ;i++){
        newmatriz[i] = []
        for(j=0; j < x[0].length ;j++){
            newmatriz[i][j] = x[i][j] + y[i][j]
        }
    }
    return newmatriz
}

// console.log(matrizsoma([[1,2],[2,3],[2,5]],
                    //    [[3,4],[4,5],[7,5]]))

function multiplicamatriz(x,y){
    let linha = x.length
    let coluna = y[0].length
    let colunadex = x[0].length
    let linhay = y.length
    let matrizmultipla = []
    console.log(`a matriz x possui ${linha} linhas enquanto a matriz y possui ${coluna} colunas`)

    //LINHAA

    if(linha == 1){
        console.log("bombom")
        matrizmultipla = []
        for(j = 0; j<coluna; j++){
            let soma = 0
            for(k = 0; k < colunadex; k++){
                soma += x[0][k] * y[k][j]; 
            }
            if (!matrizmultipla[0]) matrizmultipla[0] = []; // Inicializa a linha 0
            matrizmultipla[0][j] = soma;
        }
    }

    //COLUNAA

    if(coluna == 1){
        console.log("Voce está operando com uma matriz coluna")
        matrizmultipla = []
        for(i = 0; i < linha; i++){
            let soma = 0
            for(j = 0; j < colunadex ; j++){
                soma += x[i][j] * y[j][0]
            }
            matrizmultipla[i] = [soma]
        }

    }else{

    //UM FODASEEEE

        console.log("else")
        for(i = 0; i < linha; i++){       
            matrizmultipla[i] = []
            for(j=0; j < coluna ; j++ ){
                let soma = 0
                for(k = 0; k < colunadex; k++){
                    soma += x[i][k] * y[k][j]
                }
                matrizmultipla[i][j] = soma
            }
        }
    }


    return matrizmultipla

}
// console.log(multiplicamatriz(
//  [  [1,3,4]] // 1x3
//  ,[[1,2],[3,4], [5,6]], // 3x2
// // 
// ));

// console.log(multiplicamatriz(
//     [[1,2],[2,3]],
//     [[23,4] , [1,4]]
// ))
console.log(multiplicamatriz(
    [[1,2,3],[6,4,5]], //2x3
    [[4],[5],[-1]] //3x1
))

