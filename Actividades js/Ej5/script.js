function realizarOperacion() {
    //Entorno:
    var sOpe = document.getElementById("ope").value;
    var sMensaje = "";
    var caracteres = /[*+/-]/i;

    //Algoritmo:
    if (sOpe.length > 2) {
        while (sOpe.length > 2) {
            //Saco el primer numero y lo quito de la operacion total
            var iNum1 = sOpe.substr(0, sOpe.indexOf(sOpe.match(caracteres)));
            sOpe = sOpe.substr(sOpe.indexOf(sOpe.match(caracteres)), sOpe.length - 1);

            //Hago lo mismo con el operador
            var sOperador = sOpe.substr(0, 1);
            sOpe = sOpe.substr(1, sOpe.length - 1);

            if (sOpe.length > 2) {
                var iNum2 = sOpe.substr(0, sOpe.indexOf(sOperador));
                sOpe = sOpe.substr(1, sOpe.length - 1);
            } else {
                //Si tiene menos de 2, es porque queda solo un numero.
                var iNum2 = sOpe;
                sOpe = "";
            } //Fin Si

            var iResultado = 0;
            switch (sOperador) {
                case '+':
                    iResultado = Number(iNum1) + Number(iNum2);
                    break;
                case '*':
                    iResultado = Number(iNum1) * Number(iNum2);
                    break;
                case '/':
                    iResultado = Number(iNum1) / Number(iNum2);
                    break;
                case '-':
                    iResultado = Number(iNum1) - Number(iNum2);
                    break;
                default:
                    sOpe = "";
            } //Fin Segun Sea

            sOpe = iResultado + sOpe;
        } //Fin Mientras
        sMensaje = "El resultado es: " + sOpe;
    } else {
        sMensaje = "Debe introducir una operacion";
    } //Fin Si

    document.getElementById("resultado").innerHTML = sMensaje;
} //Fin Funcion