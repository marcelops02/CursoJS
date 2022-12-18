function carregar() {
  var msg = document.querySelector("div#msg");
  var img = document.querySelector("img#imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = "fotomanha.jpg";
    document.body.style.background = "#e2cd9c";
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = "fototarde.jpg";
    document.body.style.background = "#b9846f";
  } else {
    //BOA NOITE!
    img.src = "fotonoite.jpg";
    document.body.style.background = "#515154";
  }
}
