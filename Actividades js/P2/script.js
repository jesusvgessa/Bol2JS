window.onload = tiempo;
        var iSegundos = prompt("Inserte el numero de segundos que ha de contar..");

        function tiempo() {
            //Creo un h1 con el texto 'esperando...'
            var h1 = document.createElement('h1');

            //Le doy un id para pasarselo por referencia en el setTimeout,
            //que es donde realizo la cuenta atras
            h1.setAttribute("id", "parpadea2");
            h1.innerHTML = "Esperando...";
            document.body.appendChild(h1);

            setTimeout(function() {
                document.getElementById("parpadea2").innerHTML = "¡Tiempo agotado!";
                //Le doy otro id 
                h1.setAttribute("id", "parpadea");
                document.body.style.backgroundColor = 'red';
            }, iSegundos * 1000);
        }