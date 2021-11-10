function calcularDecibelios() {
    //Entorno:
    var iP1 = document.getElementById("p1").value;
    var iP2 = document.getElementById("p2").value;

    //Algoritmo:
    var fDecibelios = (10*Math.log10(iP1/iP2)).toFixed(2);
    var resultado = document.createElement('p');
    resultado.innerHTML = "Resultado: "+fDecibelios;
    resultado.setAttribute("class","res");
    document.body.appendChild(resultado);
}//Fin Funcion