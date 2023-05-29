const valorTicket = 200;

function calcularTicket() {
    
    alert(leerCantidad());
    alert(leerCategoria());
    anotarValor(500);
}

function leerCantidad() {
    const cantidad = document.getElementById('exampleCant').value;
    return cantidad;
}

function leerCategoria() {
    const categoria = document.getElementById('selectCategoria').value;
    return categoria;
}

function anotarValor(monto) {
    document.getElementById('monto').innerHTML = 'Total a Pagar: $ ' + monto;
}