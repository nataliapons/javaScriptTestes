function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/amanhecer.jpg'
        document.body.style.background = '#eba66ebd'
    } else if (hora >= 12 && hora <18){
        //Boa tarde
        img.src = 'imagens/entardecer.jpg'
        document.body.style.background = '#f06e03e3'
    } else {
        //Boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#0399f0e3'
    }
}