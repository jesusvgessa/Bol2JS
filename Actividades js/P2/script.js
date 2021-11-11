function cuentaAtras() {
    var sTiempo = document.getElementById('tiempo').value;

    var h1 = document.createElement("h1");
    h1.innerHTML = "Esperando...";
    h1.style.textAlign = "center";
    h1.setAttribute("id", "parpadea");
    document.body.appendChild(h1);
    var body = document.createElement("body");

    setTimeout(function() {
        h1.innerHTML = "¡TIEMPO AGOTADO!";
        document.body.appendChild(h1);
        h1.style.color = "white";
        h1.style.textAlign = "center";
        document.body.style.background = "red";
        window.setInterval(BlinkIt, 400);
        var color = "red";

        function BlinkIt() {
            var blink = document.getElementById("parpadea");
            color = (color == "#ffffff") ? "red" : "#ffffff";
            blink.style.color = color;
        }
    }, 1000 * sTiempo);
}