function obtenerResultados(){
    let numero = document.getElementById("fibonacciNumber").value;
    let resultado = document.getElementById("resultado");

    resultado.textContent = calcularFibonacci(numero)
}

function calcularFibonacci(numero){
    numero = parseInt(numero, 10);

    if(numero <= 1){
        return numero;
    }else{
        return calcularFibonacci(numero-1) + calcularFibonacci(numero-2)
    }
}