function ordenaNum(a,b){
    if(a[1]===b[1]){
        return 0;
    }else{
        return (a[1]<b[1]) ? -1 : 1;
    }//Fin  si
}

function hacerTabla() {
    //Entorno:
    var sPujas = document.getElementById("pujas").value;

    if (sPujas != ""){

        //Primer split para separar por ;
        var sPujadoresPujas = sPujas.split(';');

        //Segundo split 
        for (var i = 0; i < sPujadoresPujas.length; i++) {
            sPujadoresPujas[i] = sPujadoresPujas[i].split(',');
        } //Fin Para
        //Aqui ya tendria la tabla bidimensional

        //Creo la tabla desordenada
        var tablaDesordenada = document.createElement('table');
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');

        th1.innerHTML = "Nombre";
        th2.innerHTML = "Puja";
        tr.appendChild(th1);
        tr.appendChild(th2);
        tablaDesordenada.appendChild(tr);

        for (var i = 0; i < sPujadoresPujas.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');

            td1.innerHTML = sPujadoresPujas[i][0];
            td2.innerHTML = sPujadoresPujas[i][1];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tablaDesordenada.appendChild(tr);
        } //Fin Para

        //Titulo de cada tabla+tabla
        var titulo = document.createElement('h1');
        titulo.innerHTML = "Desordenada:";
        document.body.appendChild(titulo);
        document.body.appendChild(tablaDesordenada);

        //Ordeno la tabla por nombre y vuelvo a crear otra tabla
        sPujadoresPujas.sort();

        var tablaOrdNombre = document.createElement('table');
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');

        th1.innerHTML = "Nombre";
        th2.innerHTML = "Puja";
        tr.appendChild(th1);
        tr.appendChild(th2);
        tablaOrdNombre.appendChild(tr);

        for (var i = 0; i < sPujadoresPujas.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');

            td1.innerHTML = sPujadoresPujas[i][0];
            td2.innerHTML = sPujadoresPujas[i][1];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tablaOrdNombre.appendChild(tr);
        } //Fin Para
        
        //Titulo de cada tabla+tabla
        var titulo = document.createElement('h1');
        titulo.innerHTML = "Ordenadas por Nombre:";
        document.body.appendChild(titulo);
        document.body.appendChild(tablaOrdNombre);

        //Ordeno la tabla por numero y vuelvo a crear la tabla
        sPujadoresPujas.sort(ordenaNum);

        var tablaOrdNum = document.createElement('table');
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');

        th1.innerHTML = "Nombre";
        th2.innerHTML = "Puja";
        tr.appendChild(th1);
        tr.appendChild(th2);
        tablaOrdNum.appendChild(tr);

        for (var i = 0; i < sPujadoresPujas.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');

            td1.innerHTML = sPujadoresPujas[i][0];
            td2.innerHTML = sPujadoresPujas[i][1];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tablaOrdNum.appendChild(tr);
        } //Fin Para
        
        //Titulo de cada tabla+tabla
        var titulo = document.createElement('h1');
        titulo.innerHTML = "Ordenadas por Numero:";
        document.body.appendChild(titulo);
        document.body.appendChild(tablaOrdNum);
        

        document.getElementById('myform').reset();
    }else{
        var titulo = document.createElement('h1');
        titulo.innerHTML = "Escribe algo";
        document.body.appendChild(titulo);
    }//Fin Si
} //Fin Funcion
