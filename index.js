const textArea = document.querySelector('.texto');
const mensaje = document.querySelector('.texto2');

function btnEncriptar(){
    const validaMensaje = /[A-ZÁÉÍÓÚáéíóú]/.test(textArea.value);
    if(validaMensaje==true){
    alert("Por favor, ingrese un texto sin mayúsculas ni acentos");
    return;
}
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}



function encriptar(stringEncriptado){
let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringEncriptado = stringEncriptado.toLowerCase();

for(let i = 0; i < matrizCode.length; i++){
    if(stringEncriptado.includes(matrizCode[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizCode[i][0], matrizCode[i][1]);

    }
    
 }
return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for(let i = 0; i < matrizCode.length; i++){
        if(stringDesencriptado.includes(matrizCode[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCode[i][1], matrizCode[i][0]);
    
        }
     }
     
    return stringDesencriptado;
    }

    function btnCopiar(){
        navigator.clipboard.writeText(mensaje.value).then(function(){
            alert("Texto copiado al portapapeles");
        })
        .catch (function(err){
            console.error('Error al copiar el texto: ', err);
    });
}

    
    
