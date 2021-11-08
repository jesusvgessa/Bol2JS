function realizarOperacion() {
    //Entorno:
    var sOpe = document.getElementById("ope").value;
    var sMensaje = "";

    //Algoritmo:
    if(sOpe.length > 2){
        while (sOpe.length > 2){
            console.log(sOpe.indexOf('*+/-'));
            var iNum1 = Number(sOpe.substr(0,sOpe.indexOf(['*+/-'])));
            console.log(iNum1);
            console.log(sOpe);
            var sOperacion = sOpe.substr(0,1);
            console.log(sOperacion);
            console.log(sOpe);
            var iNum2 = Number(sOpe.substr(0,sOpe.indexOf(['*+/-'])));
            console.log(iNum2);
            console.log(sOpe);

            sOpe = iNum1+sOperacion+iNum2+sOpe;
            console.log(sOpe);
        }//Fin Mientras
        sMensaje = "El resultado es: "+sOpe;
    }else{
        sMensaje = "Debe introducir una operacion";
    }//Fin Si
    
    document.getElementById("resultado").innerHTML = sMensaje;
} //Fin Funcion