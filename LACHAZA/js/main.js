var tarjetas = document.querySelectorAll(".card");

for (var i = 0; i < tarjetas.length; i++) {
    tarjetas[i].addEventListener("click", function () {
        this.classList.toggle("is-flipped");
    });
    tarjetas[i].addEventListener("keydown", function (evento) {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            this.classList.toggle("is-flipped");
        }
    });
}

var saludo = document.getElementById("saludo");

if (saludo) {
    var hora = new Date().getHours();
    if (hora < 12) {
        saludo.textContent = "Buenos días, aquí encuentras comida casera a precios de barrio.";
    } else if (hora < 18) {
        saludo.textContent = "Buenas tardes, aquí encuentras comida casera a precios de barrio.";
    } else {
        saludo.textContent = "Buenas noches, aquí encuentras comida casera a precios de barrio.";
    }
}

var anio = document.getElementById("anio");

if (anio) {
    anio.textContent = new Date().getFullYear();
}
