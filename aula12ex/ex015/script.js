function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector("input#txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 00 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");

    img.style.width = "250px";
    img.style.height = "250px";
    img.style.borderRadius = "100%";

    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "bebeH.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "adolescenteH.jpg");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "adultoH.jpg");
      } else {
        //Idoso
        img.setAttribute("src", "idosoH.jpg");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "bebeM.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "adolescenteM.jpg");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "adultoM.jpg");
      } else {
        //Idoso
        img.setAttribute("src", "idosoM.jpg");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
    res.appendChild(img);
  }
}
