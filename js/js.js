var total = document.getElementById("total-a-pagar");
total.innerHTML = 0;

var categoria = "estudiante";
var descuento = 80;

var cantidad = 0;

const TICKET = 200;

const FORM_CATEGORY = document.getElementById("form-category");
const FORM_QUANTITY = document.getElementById("form-quantity");

function cuenta(cantidad_, descuento_) {
    total.innerHTML = (TICKET * cantidad_) / 100 * descuento_;
}

FORM_CATEGORY.addEventListener("change", function() {
    if (this.value == "estudiante") descuento = 80;
    else if (this.value == "trainee") descuento = 50;
    else if (this.value == "junior") descuento = 15;
    cuenta(cantidad, descuento);
});

FORM_QUANTITY.onkeyup = function() {
    cantidad = this.value;
    cuenta(cantidad, descuento);
};