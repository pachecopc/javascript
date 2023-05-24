function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/1manha.png'
    } else if (hora >= 12 && hora <= 18 ) {
//boa atrde
img.src = 'imagens/1tarde.png'
    } else {
        // boa noite
        img.src = 'imagens/1noite.png'  
    }
}
