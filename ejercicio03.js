// Ejercicio 3: Suma de Dos Números
// Declara una función llamada "sumar" que acepte dos parámetros (a y b) y retorne su suma

function sumar(a, b) {
    const resultado = a + b;
    console.log(resultado);
    return resultado;
}

sumar(5, 3);



// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    sumar
};
