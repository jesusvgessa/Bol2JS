function pasarNumero() {
    //Entorno:
    var iNum = Number(document.getElementById("num").value);
    var sCadena = "";
    var iVeces = iNum;
    var iCont = 1;

    //Algoritmo:
    while (iVeces>=0) {
        for(var i=1;i<=iNum;i++){
            do{
               sCadena = sCadena + i + " ";
               iVeces--;
            }while(iVeces>0);
            sCadena = sCadena+"<br>";
            iVeces = iNum - i;
        }//Fin Para
        iVeces = iNum - iCont;
        for(var i=iNum;i>=1;i--){
            do{
                sCadena = sCadena + i + " ";
                iVeces++;
            }while(iVeces<iNum);
            sCadena = sCadena+"<br>";
            iCont++;
            iVeces = iNum - iCont;
        }//Fin Para
        iVeces--;
    } //Fin Mientras
    document.getElementById("resultado").innerHTML = sCadena;
} //Fin Funcion