var total = document.getElementById("total-a-pagar");
total.innerHTML = 0;

var categoria = "ninguna";
var descuento = 0;

var cantidad = 0;

const TICKET = 200;

const FORM_CATEGORY = document.getElementById("form-category");
const FORM_QUANTITY = document.getElementById("form-quantity");
const BORRAR = document.getElementById("borrar");

function cuenta(cantidad_, descuento_) {
    total.innerHTML = (TICKET * cantidad_) - ((TICKET * cantidad_) / 100 * descuento_);
}

FORM_CATEGORY.addEventListener("change", function() {
    if (this.value == "estudiante") descuento = 80;
    else if (this.value == "trainee") descuento = 50;
    else if (this.value == "junior") descuento = 15;
    else if (this.value == "ninguna") descuento = 0;
    cuenta(cantidad, descuento);
});

FORM_QUANTITY.onkeyup = function() {
    cantidad = this.value;
    cuenta(cantidad, descuento);
};

BORRAR.onclick = function() {
    total.innerHTML = 0;
}