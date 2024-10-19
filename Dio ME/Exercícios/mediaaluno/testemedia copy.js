
const entrada1 =[4];
let i = 0;

const entrada2 =[6];
let k = 0;

const entrada3 =[8];
let a = 0;
//////////////////////////////////////
function gets() {
    const valor = [entrada2];   
     
    return valor; 
       
}

function gets() {
    const valor = [entrada1];   
     
    return valor; 
       
}


function print(texto) {
    console.log(texto);
}

 




 

const media = gets();

    if (media < 5) {
        print('Reprovado');
    } 
   

    if (media >= 5 && media < 7) {
        print('Recuperação');
    }
     if (media >= 7) {
        print('Aprovado');
     }
