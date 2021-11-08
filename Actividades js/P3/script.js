function hacerTabla(){
    //Entorno:
    var iMin = document.getElementById("min").value;
    var iMax = document.getElementById("max").value;
    var sMensaje = "";

    //Algoritmo:
    if(iMin<1){
        var sMensaje = document.createElement('h1');
        sMensaje.innerHTML = "El minimo tiene que ser mayor que 0.";
        document.body.appendChild(sMensaje);
    }else if(iMax<iMin){
        var sMensaje = document.createElement('h1');
        sMensaje.innerHTML = "El maximo tiene que ser mayor que el minimo.";
        document.body.appendChild(sMensaje);
    }else{
        //Creo la tabla desordenada
        var tabla = document.createElement('table');
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');

        th1.innerHTML = "Pulgadas";
        th2.innerHTML = "Ancho (cm)";
        th3.innerHTML = "Alto (cm)";
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tabla.appendChild(tr);

        for(var i=iMin;i<=iMax;i++){
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');

            td1.innerHTML = i;
            td2.innerHTML = (i*2.21381).toFixed(2);
            td3.innerHTML = (i*1.24517).toFixed(2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tabla.appendChild(tr);
        }//Fin Para

        document.body.appendChild(tabla);

    }//Fin Si

}//Fin Funcion