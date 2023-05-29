const valorTicket = 200;

function calcularTicket() {

    let valor = 0;
    cantidad = leerCantidad();
    if (cantidad === '' || cantidad == 0) {
        error();
    } else {
        limpiarError();
        switch (leerCategoria()) {
            case '1':
                valor = (valorTicket - valorTicket * 80 / 100) * cantidad;
                break;
            case '2':
                valor = (valorTicket - valorTicket * 50 / 100) * cantidad;
                break;
            case '3':
                valor = (valorTicket - valorTicket * 15 / 100) * cantidad;
                break;
            default:
                valor = 0;    
        }
        anotarValor(valor);
    }
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

function error() {
    document.getElementById('advTickets').style.display = 'block';
    document.getElementById('monto').innerHTML = 'Total a Pagar: $ ';
}

function limpiarError() {
    document.getElementById('advTickets').style.display = 'none';
}

function borrar() {

    document.getElementById('exampleName').value = '';
    document.getElementById('exampleSurname').value = '';
    document.getElementById('exampleEmail').value = '';
    document.getElementById('exampleCant').value = '';
    document.getElementById('monto').innerHTML = 'Total a Pagar: $ ';
}