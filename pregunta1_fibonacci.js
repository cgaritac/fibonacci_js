function obtenerResultados(){
    let numero = document.getElementById("fibonacciNumber").value;
    let resultado = document.getElementById("resultado");

    resultado.textContent = calcularFibonacci(numero)
}

function calcularFibonacci(numero){
    numero = parseInt(numero, 10)
    if(numero === 0){
        return 0;
    }else if(numero === 1){
        return 1;
    }else{
        let numeroTrasAnterior = 0;
        let numeroAnterior = 1;
        let resultado = 0;

        for(let i = 2; i<=numero; i++){
            resultado = numeroAnterior + numeroTrasAnterior;

            numeroTrasAnterior = numeroAnterior;
            numeroAnterior = resultado;            
        }

        return resultado;
    }
}