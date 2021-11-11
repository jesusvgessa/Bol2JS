function validarContrasena() {
    //Entorno:
    var sContra = document.getElementById("contra").value;
    var sMensaje = "";
    var iNum = 0;
    var iMayus = 0;
    var iMinus = 0;
    var iCar = 0;

    //Algoritmo:
    //Recorro la contraseña entera y utilizo un contador para cada tipo de caracter requerido
    if (sContra.length >= 10) {

        for (var i = 0; i < sContra.length; i++) {
            if ((sContra.charCodeAt(i) >= 33 && sContra.charCodeAt(i) <= 96) || (sContra.charCodeAt(i) >= 123 && sContra.charCodeAt(i) <= 126)) {
                if (sContra.charCodeAt(i) >= 48 && sContra.charCodeAt(i) <= 57) {
                    //Numero
                    iNum++;
                } else if (sContra.charCodeAt(i) >= 65 && sContra.charCodeAt(i) <= 90) {
                    //mayus
                    iMayus++;
                } else {
                    //caracter especial
                    iCar++;
                } //Fin Si
            } else {
                //minus
                iMinus++;
            } //Fin Si
        } //Fin Para

        if (iCar >= 0.1 * sContra.length && iNum >= 0.2 * sContra.length && iMinus >= (1 / 3) * (iMayus + iMinus) && iMayus >= (1 / 3) * (iMayus + iMinus)) {
            sMensaje = "Su contrasena es valida, y se considera como fuerte.";
        } else {
            sMensaje = "Su contrasena es valida, pero para considerarse como fuerte: <br>";

            if (iCar < 0.1 * sContra.length) {
                sMensaje = sMensaje + "- Debe tener al menos el 10% de caracteres especiales.<br>";
            } //Fin Si

            if (iNum < 0.2 * sContra.length) {
                sMensaje = sMensaje + "- Debe tener al menos el 20% numeros.<br>";
            } //Fin Si

            if (iMinus >= (1 / 3) * (iMayus + iMinus) || iMayus >= (1 / 3) * (iMayus + iMinus)) {
                sMensaje = sMensaje + "- Debe tener al menos 1/3 de los caracteres diferentes(mayus/minus).<br>";
            } //Fin Si
        } //Fin Si

    } else {
        sMensaje = "Debe introducir una contrasena de al menos 10 caracteres.";
    } //Fin Si

    document.getElementById("resultado").innerHTML = sMensaje;
} //Fin Funcion