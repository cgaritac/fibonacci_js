function obtenerResultados(){
    let numero = document.getElementById("fibonacciNumber").value;
    let resultado = document.getElementById("resultado");

    resultado.textContent = calcularFibonacci(numero)
}

