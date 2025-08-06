// Append number or operator to display
//Agreaga numero o operador a la pantalla

function appendValue(value) {
    document.getElementById("display").value += value;
}
/* Display Clear / Borrar Pantalla */
function clearDisplay() {
    document.getElementById("display").value = "";
}

/* Delete Last Character / Borrar Ultimo Caracter */
function deletelast() {
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}

/* Calculate Result / Calcular Resultado */
/*function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}*/

/* Cientific Calculator / Calculadora Cientifica */
function calculate() {
        let expression = document.getElementById('display').value;

            // Insertar * en multiplicaciones implícitas (ej: 2(3+4) -> 2*(3+4))
        expression = expression.replace(/(\d)\(/g, '$1*('); // número seguido de (
        expression = expression.replace(/\)(\d)/g, ')*$1'); // ) seguido de número
        expression = expression.replace(/\)(\()/g, ')*(');  // ) seguido de (

    try {
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}