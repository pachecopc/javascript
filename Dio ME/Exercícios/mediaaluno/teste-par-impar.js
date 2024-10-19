//////funçao auxiliar///////////

const entradas = [5, 3, 4, 1, 10 , 8 ];
let i = 0

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

////////////////////////codigo de saida forma mais extença ////////////////////////



const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0){
        if (maiorNumeroPar === 0 ) {
            maiorNumeroPar = numero;
        } else if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
              
        } else {
            if(menorNumeroImpar === 1) {
                menorNumeroImpar = numero;
            } else if(numero < menorNumeroImpar){
                menorNumeroImpar = numero;
            }
        }
        
}


print('Maior número par: ' + maiorNumeroPar)
print('Menor número impar: ' + menorNumeroImpar)

//////////////forma simplificada ////////////////////

/*const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0){
        if (maiorNumeroPar === null ||  numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        } 
        
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        } 
        }

    }*/