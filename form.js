export function checkNumDocumento(valor, tipo){
    if (tipo == "tarjeta_identidad"){
        return validari(valor);
    }
    if (tipo == "cedula"){
        return validari(valor);
    }
    if (tipo == "pasaporte"){
        return validari(valor);
    }
    if (tipo == "tarjeta_residencia"){
        return validari(valor);
    }
}
function validari(valor) {
    const ptr = new RegExp('[^0-9]+');
    if (valor.length >= 8 && valor.length <= 10) {
        if (!ptr.test(valor)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export function checkCorreo(valor) {
    if (/\w+([-+.']\w+)*@\w+([-.]\w+)*\./.test(valor)) {
        return true;
    } else {
        return false;
    }
}

export function checkContrasena(valor) {
    const ptr1 = new RegExp('[A-ZÑ]+');
    const ptr2 = new RegExp('[a-zñ]+');
    const ptr3 = new RegExp('[0-9]+');

    if ((valor.length >= 8) && ptr1.test(valor) && ptr2.test(valor) && ptr3.test(valor)) {
        return true;
    } else {
        return false;
    }
}
module.exports={checkNumDocumento, checkCorreo, checkContrasena}