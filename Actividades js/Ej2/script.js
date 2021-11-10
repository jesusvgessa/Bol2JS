function pasarCadena() {
    //Entorno:
    var sCadena = document.getElementById("cadena").value;
    var sCadenaInv = "";

    //Algoritmo:
    for (var i = sCadena.length; i > 0; i--) {
        sCadenaInv = sCadenaInv + sCadena[i - 1];
    } //Fin Para

    document.getElementById("resultado").innerHTML = "Resultado: "+sCadenaInv;
} //Fin Funcion