function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.lengeth == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verificar os dados e tente novamente!')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade <5) {
            //Bebe
            img.setAttribute('src', 'imagens/bebe-1h.webp')
        } else if (idade < 10) {
            //Criança
            img.setAttribute('src', 'imagens/criança-1h.jpg')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem-1h.webp')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'imagens/adulto-1h.webp')
        } else {
            // idoso
            img.setAttribute('src', 'imagens/idoso-1h.jpeg')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <5) {
            //Bebe
            img.setAttribute('src', 'imagens/bebe-1m.webp')
        } else if (idade < 10) {
            //Criança
            img.setAttribute('src', 'imagens/criança-1m.jpeg')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem-1m.webp')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'imagens/adulto-1m.jpeg')
        } else {
            // idoso
            img.setAttribute('src', 'imagens/idosa-1m.webp')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
   }
}