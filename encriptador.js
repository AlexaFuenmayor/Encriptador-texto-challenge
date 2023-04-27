const encriptador = () => {
  let encriptado = "";

  //texto ingresado por el usuario
  let letra = document.querySelector(".input").value.toLowerCase();

  //Ocultar textarea
  document.querySelector(".input").style.display = "none";

  //Mostrar imagen muñeco
  document.getElementsByClassName("imagen-prueba")[0].style.display = "block";

  //ocultar señalización no usar simbolos
  document.getElementsByTagName("i")[0].style.display = "none";

  for (let i = 0; i < letra.length; i++) {
    if (letra[i] === "a") {
      encriptado += "ai";
    } else if (letra[i] === "e") {
      encriptado += "enter";
    } else if (letra[i] === "i") {
      encriptado += "imes";
    } else if (letra[i] === "o") {
      encriptado += "ober";
    } else if (letra[i] === "u") {
      encriptado += "ufat";
    } else {
      encriptado += letra[i];
    }
  }

  //SINTAXIS FOR OF
  // for(let e of letra){
  //     if (e == 'a') {
  //         e='ai'
  //        sifrado += e
  //     }else if(e == 'e'){
  //         e='enter'
  //         sifrado += e

  //     }else if(e == 'i'){
  //         e='imes'
  //         sifrado += e

  //     }else if(e == 'o'){
  //         e='ober'
  //         sifrado += e

  //     }else if(e == 'u'){
  //         e='ufat'
  //         sifrado += e

  //     }else{
  //         sifrado +=e
  //     }

  // }
  if (encriptado) {
    let areaShowEncriptacion = document.getElementById("texto-encriptado");

    areaShowEncriptacion.innerHTML = encriptado;
    // areaShowEncriptacion.style.width="min-content"
    document.getElementsByTagName("h2")[0].innerHTML = "Texto Encriptado:";

    console.log("sifrado es: ", encriptado);

    const desencriptador = () => {
      document.getElementsByClassName("imagen-prueba")[0].style.display =
        "none";
      document.querySelector(".input").style.display = "block";
      areaShowEncriptacion.innerHTML = letra;
      document.getElementsByTagName("h2")[0].innerHTML = "Texto desencriptado:";
      document.getElementsByTagName("i")[0].style.display = "flex";
    };
    document
      .getElementById("desencriptar")
      .addEventListener("click", desencriptador);
  }
};

// boton
document.getElementById("encriptar").addEventListener("click", encriptador);
