

    const { gets, print } = require('./funcoes-auxiliares-ex1');

    const media = gets();

    if (media >= 0 && media < 5) {
        print('Reprovado');
    } else if (media >= 5 && media < 7) {
        print('Recuperação');
    } else if (media >= 7) {
        print('Aprovado');
    } else {
      print('Numero invalido');
    }