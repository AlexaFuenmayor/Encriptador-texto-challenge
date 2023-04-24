const encriptador = () =>{
    let letra = document.querySelector('.input').value.toLowerCase()
    let sifrado = "";

    // let vocales = {
    //     a: 'a',
    //     e: 'e',
    //     i: 'i',
    //     o: 'o',
    //     u: 'u'

    // }

    for(let i = 0; i< letra.length; i++){
        console.log(letra[i]);
        if(letra[i] === 'a'){
            // letra[i] = 'ai'
            sifrado += 'ai'



        }else if(letra[i] === 'e'){
            sifrado += 'enter'

        }else if(letra[i] === 'i'){
            sifrado += "imes"


        }else if(letra[i] === 'o'){
            sifrado += "ober"

        }else if(letra[i] === 'u'){
            sifrado += "ufat"

        }else{
            sifrado += letra[i]

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
    if(sifrado){
        let areaShowEncriptacion = document.getElementById('texto-encriptado')
        console.log(areaShowEncriptacion);
        areaShowEncriptacion.innerHTML = sifrado
        // areaShowEncriptacion.style.width="min-content"
        console.log(sifrado);
        document.getElementsByTagName('h2')[0].innerHTML = 'Texto Encriptado:'


    }



}

document.getElementById('encriptar').addEventListener('click', encriptador)
// boton


