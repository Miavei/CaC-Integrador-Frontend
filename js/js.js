var total = document.getElementById("total-a-pagar");
total.innerHTML = 0;

var categoria = "estudiante";
var descuento = 80;

var cantidad = 0;

const TICKET = 200;

function cuenta(cantidad_, descuento_) {
    total.innerHTML = (TICKET * cantidad_) / 100 * descuento_;
}

document.getElementById("form-category").addEventListener("change", function() {
    if (this.value == "estudiante") descuento = 80;
    else if (this.value == "trainee") descuento = 50;
    else if (this.value == "junior") descuento = 15;
    cuenta(cantidad, descuento);
});

document.getElementById("form-quantity").addEventListener("change", function() {
    cantidad = this.value;
    cuenta(cantidad, descuento);
});